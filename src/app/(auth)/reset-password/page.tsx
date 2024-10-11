'use client';

import ResetPasswordForm from '@/features/auth/reset-password/ui/ResetPassword';
import { useModal } from '@/shared/hooks/useModal';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { openModal } = useModal();
  const email = searchParams.get('email');

  return (
    <div>
      <ResetPasswordForm />
      {/* 에러 모달 추가 */}
      {/* 모달을 클릭하면 화면이동 */}
    </div>
  );
}
