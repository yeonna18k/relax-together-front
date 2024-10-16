import { SignupFormType } from '@/features/auth/signup/ui/SignupForm';
import { useModal } from '@/shared/hooks/useModal';
import axios from 'axios';
import { UseFormReturn } from 'react-hook-form';
import { signupApiService } from '../../api/service/AuthApiService';

export function useVerifyEmailAuthCode(
  form: UseFormReturn<SignupFormType>,
  setEmailAuth: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const { openModal } = useModal();
  const handleVerifyCode = async (code: string) => {
    try {
      const response = await signupApiService.VerifyEmailAuthCode(code);
      if (response.data === 'success') {
        setEmailAuth(true);
      }
      return response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 409) {
          openModal('EmailAuthModal');
        } else {
          form.setError('email', {
            message: '이메일 인증 중 오류가 발생했습니다.',
          });
        }
      }
    }
  };
  return { handleVerifyCode };
}
