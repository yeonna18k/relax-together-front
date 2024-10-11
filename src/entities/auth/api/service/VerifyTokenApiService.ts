import ApiService from '@/shared/api/service/ApiService';

export type VerifyTokenResponse = { email: string };
export type VerifyTokenRequest = { token: string | null };

class VerifyTokenApiService extends ApiService {
  async verifyToken(token: string | null) {
    // const response = await this.post<VerifyTokenResponse>(
    //   `${BASE_URL}/api/verify-token`,
    //   {
    //     token,
    //   },
    // );
    // return response;
    throw new Error('토큰이 유효하지 않습니다.');
  }
}

export const verifyTokenApiService = new VerifyTokenApiService();
