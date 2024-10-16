'use client';
import { requestPasswordResetEmail } from '@/entities/auth/api';
import { ForgotPassword } from '@/features/auth/forget-password/ui/ForgotPassword';
import { useModal } from '@/shared/hooks/useModal';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

export default function useForgotPassword(form: UseFormReturn<ForgotPassword>) {
  const searchParams = useSearchParams();
  const isTokenExpired = searchParams.get('isTokenExpired');
  const { openModal } = useModal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isTokenExpired === 'true') {
      openModal('TokenExpired');
    }
  }, [isTokenExpired, openModal]);

  // 비밀번호 찾기 요청 함수
  async function onSubmit(values: ForgotPassword) {
    setIsSubmitting(true);
    try {
      await requestPasswordResetEmail(values.email);
      setIsSuccess(true);
      openModal('forgotPassword');
    } catch (error: unknown) {
      setIsSuccess(false);
      if (axios.isAxiosError<{ e?: { message: string } }>(error)) {
        const errorMessage =
          error.response?.data?.e?.message || '존재하지 않는 아이디입니다.';
        form.setError('serverError', { message: errorMessage });
      }
    } finally {
      setIsSubmitting(false);
    }
  }
  return { onSubmit, isSubmitting, isSuccess };
}
