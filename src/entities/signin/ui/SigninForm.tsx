'use client';
import TogglePage from '@/entities/auth/ui/TogglePage';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
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

  const formValid = form.formState.isValid;

  async function onSubmit(values: SigninFormType) {
    console.log(values);
  }

  return (
    <div className="w-full rounded-xl bg-white px-4 py-8">
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
            >
              확인
            </Button>
            <TogglePage page="signin" />
          </div>
        </form>
      </Form>
    </div>
  );
}
