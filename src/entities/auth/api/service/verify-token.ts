import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';

export type VerifyTokenResponse = { success: boolean; message: string };

class VerifyTokenApiService extends ApiService {
  async verifyToken(token: string): Promise<VerifyTokenResponse> {
    const response = await this.post<VerifyTokenResponse>(
      `${BASE_URL}/api/verify-token`,
      {
        token,
      },
    );
    return response.data;
  }
}

export const verifyTokenApiService = new VerifyTokenApiService();
