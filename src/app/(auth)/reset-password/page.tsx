'use client';

import ResetPasswordForm from '@/features/auth/reset-password/ui/ResetPassword';

export default function ResetPasswordPage() {
  const handlePasswordChange = async (data: {
    password: string;
    passwordCheck: string;
  }) => {
    try {
      // 실제 비밀번호 변경 API 요청을 여기에 추가하세요
      console.log('비밀번호 변경 데이터:', data);
      // 예시: await resetPasswordApiService.resetPassword(token, data.password);
    } catch (error) {
      throw new Error('비밀번호 변경 실패');
    }
  };

  return (
    <div>
      <ResetPasswordForm onSubmit={handlePasswordChange} />
    </div>
  );
}
