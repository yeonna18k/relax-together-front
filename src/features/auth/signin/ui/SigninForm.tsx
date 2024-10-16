'use client';

import { useSignin, useSigninUserData } from '@/entities/auth/api';
import useAccessToken from '@/shared/hooks/useAccessToken';
import { useUserDataStore } from '@/shared/store/useUserDataStore';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import GenericFormField from '../../ui/GenericFormField';
import TogglePage from '../../ui/TogglePage';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요.' })
    .email('이메일 형식을 입력해주세요.'),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
  loginError: z.string().optional(),
});

export type SigninFormType = z.infer<typeof formSchema>;

export default function SigninForm() {
  const form = useForm<SigninFormType>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect') || '/gatherings'; // redirect 경로 (기본값: /gatherings)

  const formValid = form.formState.isValid;
  const { signin } = useSignin(form);
  const { signinUserData } = useSigninUserData();
  const { setAccessToken } = useAccessToken();
  const setUser = useUserDataStore(state => state.setUser);

  async function onSubmit(values: SigninFormType) {
    const res = await signin(values);
    if (res && res.accessToken) {
      setAccessToken(res.accessToken);
      const response = await signinUserData();
      if (response) {
        setUser(response.data);
        router.push(redirectPath);
      }
    }
  }

  return (
    <div>
      <div className="mt-[15px] w-full rounded-xl bg-white px-4 py-8 md:mx-auto md:mt-[49px] md:w-[608px] md:px-[54px] xl:mx-0 xl:mt-[30px] xl:w-[510px]">
        <div className="mb-8 text-center text-xl font-semibold text-gray-800 md:text-2xl">
          로그인
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <GenericFormField
              form={form}
              name="email"
              label="아이디"
              placeholder="이메일을 입력해주세요"
              isErrorMessage={false}
            />
            <GenericFormField
              form={form}
              name="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              isErrorMessage={false}
            />
            <div className="space-y-3">
              {form.formState.errors.loginError ? (
                <p className="text-center text-sm font-semibold text-error">
                  {form.formState.errors.loginError?.message
                    ?.split('^')
                    .map((msg, index) =>
                      index === 0 ? (
                        <>
                          {msg}
                          <br />
                        </>
                      ) : (
                        <>{msg}</>
                      ),
                    )}
                </p>
              ) : (
                <div className="h-10 w-full" />
              )}
              <Button
                disabled={!formValid}
                variant={`${formValid ? 'enabled' : 'disabled'}`}
                size="full"
                className="md:h-11 md:text-base"
              >
                로그인
              </Button>
            </div>
            <TogglePage page="signin" />
          </form>
        </Form>
      </div>
      <div className="mt-6 flex w-full justify-center gap-2 text-gray-500">
        <p>비밀번호를 잊어버리셨나요?</p>
        <Link href="/forgot-password" className="underline">
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
}
