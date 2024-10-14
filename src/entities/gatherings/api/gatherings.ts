import { gatheringsApiService } from '@/entities/gatherings/api/service/GatheringsApiService';
import { FilterParams } from '@/entities/gatherings/model/params';
import { FetchParams } from '@/entities/mypage/api/queries/common';
import { LIMIT } from '@/shared/lib/constants';

export const fetchGatherings = async ({
  type,
  location,
  date,
  pageParam,
  sortBy,
  sortOrder,
}: FetchParams & Partial<FilterParams>) => {
  const response = await gatheringsApiService.getGatherings({
    type,
    location,
    date,
    pageParam,
    size: LIMIT,
    sortBy,
    sortOrder,
  });
  return response.data;
};
