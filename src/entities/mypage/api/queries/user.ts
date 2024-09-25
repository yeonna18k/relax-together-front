import { apiService } from '@/shared/service/ApiService';
import { queries } from '@/shared/service/queries';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

export const user = createQueryKeys('user', {
  userInfo: () => ({
    queryKey: ['userInfo'],
    queryFn: () => apiService.getUser(),
  }),
});

export function useUserData() {
  const { data: user, isLoading } = useQuery(queries.user.userInfo());

  return { user, isLoading };
}
