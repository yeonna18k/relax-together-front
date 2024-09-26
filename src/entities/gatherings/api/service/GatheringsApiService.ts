import { PaginationParams } from '@/entities/mypage/model';
import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL, LIMIT } from '@/shared/lib/constants';
import { Gathering, Response } from '@/shared/model';

class GatheringsApiService extends ApiService {
  async getGatherings({ page, size = LIMIT }: PaginationParams) {
    const response = await this.get<Response<Gathering>>(
      `${BASE_URL}/api/gatherings?page=${page}&size=${size}`,
    );
    return response;
  }
}

export const gatheringsApiService = new GatheringsApiService();
