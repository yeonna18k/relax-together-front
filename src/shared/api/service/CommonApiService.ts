import ApiService from '@/shared/api/service/ApiService';

class CommonApiService extends ApiService {
  async leaveGatheringById(gatheringId: number) {
    const response = await this.delete(`api/gatherings/${gatheringId}/leave`);
    return response;
  }
}

export const commonApiService = new CommonApiService();
