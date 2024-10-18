import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import { User } from '@/shared/model';

export default class CommonApiService extends ApiService {
  constructor() {
    super();
  }

  async signout() {
    const response = await this.post(`${BASE_URL}/api/auths/logout`);
    return response;
  }

  async leaveGatheringById(gatheringId: number) {
    const response = await this.delete(
      `${BASE_URL}/api/gatherings/${gatheringId}/leave`,
    );
    return response;
  }

  async getUserInfo() {
    const response = await this.get<User>(`${BASE_URL}/api/auths/me`);
    return response;
  }
}

export const commonApiService = new CommonApiService();
