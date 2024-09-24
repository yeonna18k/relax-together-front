import { LIMIT } from '@/shared/lib/constants';
import { apiService } from '@/shared/service/ApiService';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchJoinedGatherings = async ({ pageParam }: { pageParam: number }) => {
  const response = await apiService.getMyJoinedGatherings({
    page: pageParam,
    size: LIMIT,
  });
  return response.data;
};

export function useMyGatheringsData() {
  const { data, error, fetchNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ['myGatherings'],
      queryFn: fetchJoinedGatherings,
      initialPageParam: 0,
      getNextPageParam: (lastPage, _, lastPagePram) =>
        lastPage.hasNext ? lastPagePram + 1 : undefined,
    });

  return {
    data,
    error,
    fetchNextPage,
    isFetchingNextPage,
    status,
  };
}
