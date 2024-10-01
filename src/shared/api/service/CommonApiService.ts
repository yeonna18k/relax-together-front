import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';

class CommonApiService extends ApiService {
  async leaveGatheringById(gatheringId: number) {
    const response = await this.delete(
      `${BASE_URL}/api/gatherings/${gatheringId}/leave`,
    );
    return response;
  }
}

export const commonApiService = new CommonApiService();
