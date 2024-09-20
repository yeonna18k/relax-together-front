import { queries } from '@/shared/service/queries';
import { useQuery } from '@tanstack/react-query';

export default function useUserInfo() {
  const { data: user, isLoading } = useQuery(queries.user.userInfo());

  return { user, isLoading };
}
