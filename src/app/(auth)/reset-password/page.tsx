'use client';
import ResetPasswordForm from '@/features/auth/reset-password/ui/ResetPassword';
import { Suspense } from 'react';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordForm />
    </Suspense>
  );
}
