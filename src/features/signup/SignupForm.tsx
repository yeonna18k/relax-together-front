'use client';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import GoToSignin from './GoToSignin';
import SignupFormField from './SignupFormField';

const formSchema = z
  .object({
    username: z
      .string()
      .min(1, {
        message: '이름을 입력해주세요.',
      })
      .max(10),
    userid: z
      .string()
      .min(1, { message: '이메일을 입력해주세요.' })
      .email('이메일 형식을 입력해주세요.'),
    company: z.string().min(1, { message: '회사명을 입력해주세요.' }),
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

export default function SignupForm() {
  const form = useForm<SignupFormType>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      username: '',
      userid: '',
      company: '',
      password: '',
      passwordCheck: '',
    },
  });
  const formValid = form.formState.isValid;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values. ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full rounded-xl bg-white px-4 py-5 md:mx-auto md:w-[536px] md:px-16 md:py-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <SignupFormField form={form} name="username" />
          <SignupFormField form={form} name="userid" />
          <SignupFormField form={form} name="company" />
          <SignupFormField form={form} name="password" />
          <SignupFormField form={form} name="passwordCheck" />
          <div className="!mt-10 flex flex-col gap-6">
            <Button
              variant={`${formValid ? 'enabled' : 'disabled'}`}
              size="full"
            >
              확인
            </Button>
            <GoToSignin />
          </div>
        </form>
      </Form>
    </div>
  );
}
