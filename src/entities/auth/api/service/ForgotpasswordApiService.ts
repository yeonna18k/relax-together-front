import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import axios from 'axios';

export type VerifyTokenResponse = { email: string };

export class ForgotPasswordApiService extends ApiService {
  // 토큰 검증 API
  async verifyToken(token: string | null) {
    const response = await axios.post<VerifyTokenResponse>(
      `${BASE_URL}/api/verify-token`,
      {
        token,
      },
    );
    return response;
  }

  // 비밀번호 찾기 이메일 전송 API
  async sendForgotPasswordEmail(email: string) {
    const response = await axios.post(`${BASE_URL}/api/email/password-change`, {
      email,
    });
    return response;
  }

  // 비밀번호 재설정 API
  static async resetPassword({
    email,
    newPassword,
    passwordCheck,
  }: {
    email: string;
    newPassword: string;
    passwordCheck: string;
  }) {
    const response = await axios.post(`${BASE_URL}/api/auths/change-password`, {
      email,
      newPassword,
      passwordCheck,
    });
    return response;
  }
}

export const authApiService = new ForgotPasswordApiService();
