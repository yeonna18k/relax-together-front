import { PaginationParams } from '@/entities/mypage/model/common';
import { LIMIT } from '@/shared/lib/constants';
import { apiService } from '@/shared/service/ApiService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const myGatherings = createQueryKeys('myGatherings', {
  list: ({ page, size = LIMIT }: PaginationParams) => ({
    queryKey: ['list', page, size],
    queryFn: () => apiService.getMyJoinedGatherings({ page, size }),
  }),
});
