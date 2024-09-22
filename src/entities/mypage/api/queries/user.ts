import { apiService } from '@/shared/service/ApiService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const user = createQueryKeys('user', {
  userInfo: () => ({
    queryKey: ['userInfo'],
    queryFn: () => apiService.getUser(),
  }),
});
