'use client';
import ResetPasswordForm from '@/features/auth/reset-password/ui/ResetPassword';
import { Suspense } from 'react';

export default function ResetPasswordPage() {
  return (
    <section className="flex h-[calc(100vh-60px)] w-full items-center justify-center px-4 md:px-[68px] lg:h-[calc(100vh-75px)]">
      <Suspense fallback={null}>
        <ResetPasswordForm />
      </Suspense>
    </section>
  );
}
