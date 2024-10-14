import axios from 'axios';

export function useForgotPassword() {
  async function sendForgotPasswordEmail(email: string) {
    try {
      const response = await axios.post('/api/send-email', { email }); // 서버 API 호출
      return response.data;
    } catch (error) {
      console.error('이메일 발송 실패:', error);
      throw error;
    }
  }

  return { sendForgotPasswordEmail };
}
