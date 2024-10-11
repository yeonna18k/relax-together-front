import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import { AxiosResponse } from 'axios';

export type ForgotPasswordResponse = { success: boolean; message: string };
export type ResetPasswordResponse = { success: boolean; message: string };

class ForgotPasswordApiService extends ApiService {
  // 비밀번호 찾기 이메일 전송 API (token을 옵션으로 추가 가능)
  async sendForgotPasswordEmail(email: string) {
    const response: AxiosResponse<ForgotPasswordResponse> =
      await this.post<ForgotPasswordResponse>(`${BASE_URL}/api/send-email`, {
        email,
      });
    return response;
  }

  // 비밀번호 재설정 API
  async resetPassword(
    email: string,
    newPassword: string,
    passwordCheck: string,
  ) {
    const response: AxiosResponse<ResetPasswordResponse> =
      await this.post<ResetPasswordResponse>(
        `${BASE_URL}/api/auths/reset-password`,
        {
          email,
          newPassword,
          passwordCheck,
        },
      );
    return response;
  }
}

export const forgotPasswordApiService = new ForgotPasswordApiService();
