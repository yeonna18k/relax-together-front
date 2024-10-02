import { commonApiService } from '@/shared/api/service/CommonApiService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const user = createQueryKeys('user', {
  userInfo: () => ({
    queryKey: ['userInfo'],
    queryFn: () => commonApiService.getUserInfo(),
  }),
});
