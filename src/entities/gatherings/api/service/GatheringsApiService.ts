import { PaginationParams } from '@/entities/mypage/model';
import ApiService from '@/shared/api/service/ApiService';
import { LIMIT } from '@/shared/lib/constants';
import { Gathering, Response } from '@/shared/model';

class GatheringsApiService extends ApiService {
  async getGatherings({ page, size = LIMIT }: PaginationParams) {
    const response = await this.get<Response<Gathering>>(
      `http://localhost:3000/api/gatherings?page=${page}&size=${size}`,
    );
    return response;
  }
}

export const gatheringsApiService = new GatheringsApiService();
