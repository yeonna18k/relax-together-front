/* eslint-disable @tanstack/query/exhaustive-deps */
import { FetchFunction, FetchParams } from '@/entities/mypage/api/queries';
import { QueryClient, QueryKey } from '@tanstack/react-query';

export async function prefetchCommonInfiniteData<T, P = void>(
  queryClient: QueryClient,
  queryKey: QueryKey,
  fetchFunction: FetchFunction<T, P>,
  additionalParams?: Partial<P>,
) {
  type FetchResult = Awaited<ReturnType<typeof fetchFunction>>;

  await queryClient.prefetchInfiniteQuery({
    queryKey: additionalParams ? [...queryKey, additionalParams] : queryKey,
    queryFn: ({ pageParam = 0 }) => {
      const params = { pageParam } as FetchParams & Partial<P>;
      if (additionalParams) {
        Object.assign(params, additionalParams);
      }
      return fetchFunction(params);
    },
    initialPageParam: 0,
    getNextPageParam: (
      lastPage: FetchResult,
      _: unknown,
      lastPageParam: number,
    ) => (lastPage.hasNext ? lastPageParam + 1 : undefined),
  });
}
