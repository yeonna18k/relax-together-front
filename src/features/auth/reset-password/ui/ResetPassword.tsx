'use client';

import GenericFormField from '@/features/auth/ui/GenericFormField';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import CreateSuccessModal from '../../ui/ResetSuccessModal';

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: '비밀번호가 8자 이상이 되도록 해 주세요.' }),
    passwordCheck: z
      .string()
      .min(1, { message: '비밀번호 확인을 위해 한 번 더 입력해주세요.' }),
    serverError: z.string().optional(),
  })
  .refine(data => data.password === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });

export type ResetPassword = z.infer<typeof formSchema>;

export default function ResetPasswordForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<ResetPassword>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      password: '',
      passwordCheck: '',
    },
  });

  const formValid = form.formState.isValid;
  const { modal, openModal, closeModal } = useModal();
  const handleSubmit = async (data: ResetPassword) => {
    try {
      setErrorMessage(null);
      openModal('ResetSuccess');
      // 실제 비밀번호 변경 API 요청을 여기에 추가하세요
      console.log('비밀번호 변경 데이터:', data);
      // 예시: await resetPasswordApiService.resetPassword(token, data.password);
    } catch (error: unknown) {
      if (axios.isAxiosError<{ e?: { message: string } }>(error)) {
        if (error.response?.status === 400) {
          form.setError('serverError', { message: '잘못된 요청입니다.' });
        }
      }
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
            {form.formState.errors && (
              <p className="text-red-500">
                {form.formState.errors.serverError?.message}
              </p>
            )}

            <Button
              disabled={!formValid}
              variant={`${formValid ? 'enabled' : 'disabled'}`}
              size="full"
            >
              비밀번호 변경하기
            </Button>
          </form>
        </Form>
        {modal.includes('ResetSuccess') && <CreateSuccessModal />}
      </div>
    </div>
  );
}
