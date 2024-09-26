import { mypageApiService } from '@/entities/mypage/api/service/MypageApiService';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const user = createQueryKeys('user', {
  userInfo: () => ({
    queryKey: ['userInfo'],
    queryFn: () => mypageApiService.getUser(),
  }),
});
