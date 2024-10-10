import { useState } from 'react';
import { forgotPasswordApiService } from '../../api/service/ForgotpasswordApiService';
// API 호출 서비스

export function useForgotPassword() {
  const [loading, setLoading] = useState(false);

  async function sendForgotPasswordEmail(email: string) {
    setLoading(true);
    try {
      const response =
        await forgotPasswordApiService.sendForgotPasswordEmail(email);

      // 응답에서 바로 success와 message를 확인
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
