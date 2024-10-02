import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import { User } from '@/shared/model';

class CommonApiService extends ApiService {
  async leaveGatheringById(gatheringId: number) {
    const response = await this.delete(
      `${BASE_URL}/api/gatherings/${gatheringId}/leave`,
    );
    return response;
  }
  async refreshToken() {
    const response = await this.get(`${BASE_URL}/api/auths/refresh-token`);
    return response;
  }
  async getUserInfo() {
    const response = await this.get<User>(`${BASE_URL}/api/auths/me`);
    return response;
  }
}

export const commonApiService = new CommonApiService();
