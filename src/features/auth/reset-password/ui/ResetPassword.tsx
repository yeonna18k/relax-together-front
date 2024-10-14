// src/pages/reset-password.tsx

'use client';

import GenericFormField from '@/features/auth/ui/GenericFormField';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ResetSuccessModal = dynamic(() => import('../../ui/ResetSuccessModal'), {
  ssr: false,
});

const formSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
    passwordCheck: z
      .string()
      .min(8, { message: '비밀번호 확인을 위해 다시 입력해주세요.' }),
  })
  .refine(data => data.newPassword === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });

export type ResetPassword = z.infer<typeof formSchema>;

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const email = searchParams.get('email') || '';

  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm<ResetPassword>({
    resolver: zodResolver(formSchema),
    mode: 'all',
  });

  useEffect(() => {
    if (!token || !email) {
      router.push('/');
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await fetch('/api/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          const data = await response.json();
          setVerifiedEmail(data.email);
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('토큰 검증 중 오류 발생:', error);
        router.push('/');
      }
    };

    verifyToken();
  }, [token, email, router]);

  const handleSubmit = async (data: ResetPassword) => {
    const { newPassword, passwordCheck } = data;

    try {
      setErrorMessage(null);

      if (!verifiedEmail) {
        setErrorMessage('유효한 이메일을 찾을 수 없습니다.');
        return;
      }

      const response = await fetch('/api/auths/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: verifiedEmail,
          newPassword,
          passwordCheck,
        }),
      });

      if (response.status === 204) {
        setShowSuccessModal(true);
      } else if (response.status === 409) {
        setErrorMessage('비밀번호가 일치하지 않습니다.');
      } else if (response.status === 404) {
        setErrorMessage('유저를 찾을 수 없습니다.');
      } else {
        setErrorMessage('비밀번호 변경 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('비밀번호 변경 중 오류 발생:', error);
      setErrorMessage('비밀번호 변경 중 오류가 발생했습니다.');
    }
  };

  const handleModalConfirm = () => {
    setShowSuccessModal(false);
    router.push('/');
  };

  if (!verifiedEmail) {
    return (
      <div className="mt-32 flex items-center justify-center lg:w-[1200px]">
        <div className="text-xl">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="mt-32 flex items-center justify-center lg:w-[1200px]">
      <div className="h-auto w-full max-w-md rounded-xl bg-white px-4 py-8 text-xl md:mx-auto md:px-16 md:py-8">
        <div className="mb-8 text-center text-sm font-semibold text-gray-800 md:text-2xl">
          비밀번호 변경
        </div>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="text-sm">
            <GenericFormField
              form={form}
              name="newPassword"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
            />
            <GenericFormField
              form={form}
              name="passwordCheck"
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 입력해주세요"
            />
            <Button
              disabled={!form.formState.isValid}
              variant="default"
              size="full"
            >
              비밀번호 변경하기
            </Button>
          </form>
        </Form>
        {showSuccessModal && (
          <ResetSuccessModal onConfirm={handleModalConfirm} />
        )}
      </div>
    </div>
  );
}
