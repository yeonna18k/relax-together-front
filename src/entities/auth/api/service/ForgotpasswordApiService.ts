import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import { AxiosResponse } from 'axios';

export type ForgotPasswordResponse = { success: boolean; message: string };
export type ResetPasswordResponse = { success: boolean; message: string };

class ForgotPasswordApiService extends ApiService {
  // 비밀번호 찾기 이메일 전송 API (token을 옵션으로 추가 가능)
  async sendForgotPasswordEmail(
    email: string,
    token?: string,
  ): Promise<ForgotPasswordResponse> {
    const response: AxiosResponse<ForgotPasswordResponse> =
      await this.post<ForgotPasswordResponse>(
        `${BASE_URL}/api/auths/forgot-password`,
        { email, token }, // token도 함께 전달
      );
    return response.data;
  }

  // 비밀번호 재설정 API
  async resetPassword(
    token: string,
    newPassword: string,
  ): Promise<ResetPasswordResponse> {
    const response: AxiosResponse<ResetPasswordResponse> =
      await this.post<ResetPasswordResponse>(
        `${BASE_URL}/api/auths/reset-password`,
        {
          token,
          newPassword,
        },
      );
    return response.data;
  }
}

export const forgotPasswordApiService = new ForgotPasswordApiService();
