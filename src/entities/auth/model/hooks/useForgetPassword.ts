import { useState } from 'react';
import { forgotPasswordApiService } from '../../api/service/ForgotpasswordApiService';

export function useForgotPassword() {
  const [loading, setLoading] = useState(false);

  async function sendForgotPasswordEmail(email: string, token?: string) {
    setLoading(true);
    try {
      const response = await forgotPasswordApiService.sendForgotPasswordEmail(
        email,
        token,
      );

      if (response.success) {
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      return { success: false, message: '이메일 전송에 실패했습니다.' };
    } finally {
      setLoading(false);
    }
  }

  return { sendForgotPasswordEmail, loading };
}
