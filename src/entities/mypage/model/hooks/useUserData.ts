import { queries } from '@/shared/api/queries';
import { useQuery } from '@tanstack/react-query';

export function useUserData() {
  const { data: user, isLoading } = useQuery(queries.user.userInfo());

  return { user, isLoading };
}
