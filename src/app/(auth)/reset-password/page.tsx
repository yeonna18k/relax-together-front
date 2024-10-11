'use client';

import ResetPasswordForm from '@/features/auth/reset-password/ui/ResetPassword';
import { useModal } from '@/shared/hooks/useModal';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { openModal } = useModal();
  const token = searchParams.get('token');
  console.log('🚀 ~ token:', token);
  // verifyToken(token) -> success -> resetPasswordForm, fail -> login페이지 또는 404페이지로 router.push
  // const handleVerifyToken = async () => {
  //   try {
  //     console.log('서버로 전달받은 토큰 값', token);
  //     const response = await verifyTokenApiService.verifyToken(token);
  //   } catch (error) {
  //     router.push('/signin');
  //     openModal('failVerifyToken');
  //   }
  // };

  // useEffect(() => {
  //   handleVerifyToken();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <ResetPasswordForm />
      {/* 에러 모달 추가 */}
      {/* 모달을 클릭하면 화면이동 */}
    </div>
  );
}
