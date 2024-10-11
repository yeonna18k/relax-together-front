import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';

export type ForgotPasswordResponse = { success: boolean; message: string };
export type ResetPasswordResponse = { success: boolean; message: string };

class ForgotPasswordApiService extends ApiService {
  // 비밀번호 찾기 이메일 전송 API (token을 옵션으로 추가 가능)
  async sendForgotPasswordEmail(email: string) {
    const response = await this.post(`${BASE_URL}/api/send-email`, {
      email,
    });
    return response;
  }

  // 비밀번호 재설정 API
  async resetPassword({
    email,
    newPassword,
    passwordCheck,
  }: {
    email: string;
    newPassword: string;
    passwordCheck: string;
  }) {
    const response = await this.post(`${BASE_URL}/api/auths/reset-password`, {
      email,
      newPassword,
      passwordCheck,
    });
    return response;
  }
}

export const forgotPasswordApiService = new ForgotPasswordApiService();
