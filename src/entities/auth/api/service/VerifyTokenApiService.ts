import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';

export type VerifyTokenResponse = { email: string };
export type VerifyTokenRequest = { token: string | null };

class VerifyTokenApiService extends ApiService {
  async verifyToken(token: string | null) {
    const response = await this.post<VerifyTokenResponse>(
      `${BASE_URL}/api/verify-token`,
      {
        token,
      },
    );
    return response;
  }
}

export const verifyTokenApiService = new VerifyTokenApiService();
