import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import { AxiosResponse } from 'axios'; // Axios 응답 타입 임포트

// 비밀번호 찾기 및 재설정 API 응답 타입 정의
export type ForgotPasswordResponse = { success: boolean; message: string };
export type ResetPasswordResponse = { success: boolean; message: string };

class ForgotPasswordApiService extends ApiService {
  // 비밀번호 찾기 이메일 전송 API 요청
  async sendForgotPasswordEmail(
    email: string,
  ): Promise<ForgotPasswordResponse> {
    const response: AxiosResponse<ForgotPasswordResponse> =
      await this.post<ForgotPasswordResponse>(
        `${BASE_URL}/api/auths/forgot-password`,
        { email },
      );
    return response.data; // 성공 시 서버의 응답 데이터를 반환
  }

  // 비밀번호 재설정 요청 API (토큰과 새 비밀번호를 전달)
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
    return response.data; // 성공 시 response.data에서 성공 여부 반환
  }
}

export const forgotPasswordApiService = new ForgotPasswordApiService();
