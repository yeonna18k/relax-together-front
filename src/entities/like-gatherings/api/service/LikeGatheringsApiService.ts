import { FilterParams } from '@/entities/gatherings/model/params';
import { FetchParams } from '@/entities/mypage/api/queries';
import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL, LIMIT } from '@/shared/lib/constants';
import { Gathering, Response } from '@/shared/model';

class LikeGatheringsApiService extends ApiService {
  constructor() {
    super();
  }
  async getGatherings({
    pageParam,
    type,
    location,
    date,
    size = LIMIT,
    sortBy,
    sortOrder,
  }: FetchParams & Partial<FilterParams>) {
    const response = await this.get<Response<Gathering>>(
      `${BASE_URL}/api/gatherings?type=${type}${location ? `&location=${location}` : ''}${date ? `&date=${date}` : ''}&page=${pageParam}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    );
    return response;
  }
}

export const likeGatheringsApiService = new LikeGatheringsApiService();
