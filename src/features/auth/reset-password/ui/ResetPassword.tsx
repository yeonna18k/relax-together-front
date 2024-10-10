'use client';

import GenericFormField from '@/features/auth/ui/GenericFormField';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z
  .object({
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

export default function ResetPasswordForm({
  onSubmit,
}: {
  onSubmit: (data: {
    password: string;
    passwordCheck: string;
  }) => Promise<void>;
}) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      password: '',
      passwordCheck: '',
    },
  });

  const formValid = form.formState.isValid;

  const handleSubmit = async (data: {
    password: string;
    passwordCheck: string;
  }) => {
    try {
      await onSubmit(data); // 페이지에서 전달된 onSubmit 함수를 실행
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="mt-32 flex items-center justify-center lg:w-[1200px]">
      <div className="h-[364px] w-[343px] rounded-xl bg-white px-4 py-8 text-xl md:mx-auto md:w-[536px] md:px-16 md:py-8">
        <div className="mb-8 text-center text-sm font-semibold text-gray-800 md:text-2xl">
          비밀번호 변경
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="">
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
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <Button
              disabled={!formValid}
              variant={`${formValid ? 'enabled' : 'disabled'}`}
              size="full"
            >
              비밀번호 변경하기
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
