'use client';

import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useSignup } from '@/entities/auth/api';
import GenericFormField from '../../ui/GenericFormField';
import TogglePage from '../../ui/TogglePage';
import SignupEmailFormField from './SignupEmailFormField';

const formSchema = z
  .object({
    name: z
      .string()
      .min(1, {
        message: '이름을 입력해주세요.',
      })
      .max(10),
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요.' })
      .email('이메일 형식을 입력해주세요.'),
    companyName: z.string().min(1, { message: '회사명을 입력해주세요.' }),
    password: z
      .string()
      .min(8, { message: '비밀번호가 8자 이상이 되도록 해 주세요.' }),
    passwordCheck: z
      .string()
      .min(1, { message: '비밀번호 확인을 위해 한 번 더 입력해주세요.' }),
  })
  .refine(data => data.password === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });

export type SignupFormType = z.infer<typeof formSchema>;

export default function SignupForm({
  defaultValues,
}: {
  defaultValues?: SignupFormType;
}) {
  const { signup } = useSignup();
  const form = useForm<SignupFormType>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: defaultValues || {
      name: '',
      email: '',
      companyName: '',
      password: '',
      passwordCheck: '',
    },
  });
  const formValid = form.formState.isValid;
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const newUser = {
      email: values.email,
      password: values.password,
      name: values.name,
      companyName: values.companyName,
    };
    const res = await signup(newUser);
    if (res !== undefined) {
      router.push('/signin');
    }
  }
  return (
    <div className="mt-5 w-full rounded-xl bg-white px-4 py-5 md:mx-auto md:mt-[30px] md:w-[536px] md:px-16 md:py-8 lg:mx-0 lg:mt-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <GenericFormField
            form={form}
            name="name"
            label="이름"
            placeholder="이름을 입력해주세요"
          />
          <SignupEmailFormField form={form} />
          <GenericFormField
            form={form}
            name="companyName"
            label="회사명"
            placeholder="회사명을 입력해주세요"
          />
          <GenericFormField
            form={form}
            name="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
          />
          <GenericFormField
            form={form}
            name="passwordCheck"
            label="비밀번호 확인"
            placeholder="비밀번호를 입력해주세요"
          />
          <div className="!mt-10 flex flex-col gap-6">
            <Button
              disabled={!formValid}
              variant={`${formValid ? 'enabled' : 'disabled'}`}
              size="full"
            >
              확인
            </Button>
            <TogglePage page="signup" />
          </div>
        </form>
      </Form>
    </div>
  );
}
