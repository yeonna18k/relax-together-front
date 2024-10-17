import { requestResetPasswordEmail } from '@/entities/auth/api';
import { ResetPassword } from '@/features/auth/reset-password/ui/ResetPassword';
import { useModal } from '@/shared/hooks/useModal';
import { ModalType } from '@/shared/lib/constants';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { UseFormReturn } from 'react-hook-form';

export default function useResetPassword(form: UseFormReturn<ResetPassword>) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const encodeEmail = searchParams.get('email');
  const email = encodeEmail ? decodeURIComponent(encodeEmail) : '';
  const { openModal } = useModal();
  const onSubmit = async (data: ResetPassword) => {
    const { newPassword, passwordCheck } = data;

    try {
      await requestResetPasswordEmail({
        email,
        newPassword,
        passwordCheck,
      });

      openModal(ModalType.RESET_SUCCESS);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 401) {
          form.setError('serverError', {
            message: '토큰이 만료되었습니다. 다시 시도해주세요.',
          });
        } else {
          const errorMessage =
            error.response?.data?.message ||
            '비밀번호 변경 요청에 실패했습니다.';
          form.setError('serverError', { message: errorMessage });
        }
      }
    }
  };
  return { onSubmit };
}
