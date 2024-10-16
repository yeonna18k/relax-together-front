import ForgotPasswordForm from '@/features/auth/forget-password/ui/ForgotPassword';
import AuthLeftContainer from '@/features/auth/ui/AuthLeftContainer';
import { Suspense } from 'react';

export default function ForgotPassword() {
  return (
    <>
      <AuthLeftContainer
        title="비밀번호를 분실하셨나요?ㅠㅠ"
        content={
          <>
            이메일로 보낸 링크를 타고 들어와서
            <br />
            비밀번호 변경이 가능합니다.
          </>
        }
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ForgotPasswordForm />
      </Suspense>
    </>
  );
}
