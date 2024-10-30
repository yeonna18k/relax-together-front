import { FilterParams } from '@/entities/gatherings/model/params';
import { FetchParams } from '@/entities/mypage/api/queries/common';
import { likeGatheringsApiService } from './service/LikeGatheringsApiService';

export const fetchLikeGatherings = async ({
  type,
  location,
  date,
  pageParam,
  sortBy,
  sortOrder,
}: FetchParams & Partial<FilterParams>) => {
  const response = await likeGatheringsApiService.getGatherings({
    type,
    location,
    date,
    pageParam,
    size: 100,
    sortBy,
    sortOrder,
  });
  return response.data;
};
