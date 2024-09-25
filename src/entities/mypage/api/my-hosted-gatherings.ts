import { FetchParams } from '@/entities/mypage/api/queries/common';
import { LIMIT } from '@/shared/lib/constants';
import { apiService } from '@/shared/service/ApiService';

export const fetchHostedGatherings = async ({ pageParam }: FetchParams) => {
  const response = await apiService.getMyHostedGatherings({
    page: pageParam,
    size: LIMIT,
  });
  return response.data;
};
