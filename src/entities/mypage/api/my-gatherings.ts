import { FetchParams } from '@/entities/mypage/api/queries/common';
import { LIMIT } from '@/shared/lib/constants';
import { apiService } from '@/shared/service/ApiService';

export const fetchJoinedGatherings = async ({ pageParam }: FetchParams) => {
  const response = await apiService.getMyJoinedGatherings({
    page: pageParam,
    size: LIMIT,
  });
  return response.data;
};
