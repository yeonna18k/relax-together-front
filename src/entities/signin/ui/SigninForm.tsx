'use client';
import TogglePage from '@/entities/auth/ui/TogglePage';
import useAccessToken from '@/shared/hooks/useAccessToken';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSignin } from '../api';
import SigninFormField from './SigninFormField';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요.' })
    .email('이메일 형식을 입력해주세요.'),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
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
  const formValid = form.formState.isValid;
  const { signin } = useSignin();
  const { setAccessToken } = useAccessToken();

  async function onSubmit(values: SigninFormType) {
    const res = await signin(values);
    if (res) {
      setAccessToken(res.token);
      router.push('/gatherings');
    }
  }

  return (
    <div className="mt-[15px] w-full rounded-xl bg-white px-4 py-8 md:mx-auto md:mt-[49px] md:w-[608px] md:px-[54px] xl:mx-0 xl:mt-0 xl:w-[510px]">
      <div className="mb-8 text-center text-xl font-semibold text-gray-800 md:text-2xl">
        로그인
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <SigninFormField form={form} name="email" />
          <SigninFormField form={form} name="password" />
          <div className="!mt-10 flex flex-col gap-6">
            <Button
              disabled={!formValid}
              variant={`${formValid ? 'enabled' : 'disabled'}`}
              size="full"
              className="md:h-11 md:text-base"
            >
              로그인
            </Button>
            <TogglePage page="signin" />
          </div>
        </form>
      </Form>
    </div>
  );
}
