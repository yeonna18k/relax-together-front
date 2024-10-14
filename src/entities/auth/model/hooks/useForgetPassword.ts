import axios from 'axios';

export function useForgotPassword() {
  async function sendForgotPasswordEmail(email: string) {
    try {
      const response = await axios.post('/api/email/password-change', {
        email,
      });
      return response.data;
    } catch (error) {
      console.error('이메일 발송 실패:', error);
      throw error;
    }
  }

  return { sendForgotPasswordEmail };
}
