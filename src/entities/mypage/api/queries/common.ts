/* eslint-disable @tanstack/query/exhaustive-deps */
import { Response } from '@/shared/model';
import {
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from '@tanstack/react-query';

interface InfiniteQueryResponse<T> {
  pages: Response<T>[];
  pageParams: number[];
}

export interface FetchParams {
  pageParam: number;
}

export type FetchFunction<T, P = void> = (
  params: FetchParams & Partial<P>,
) => Promise<Response<T>>;

export function useCommonInfiniteData<T, P = void>(
  queryKey: QueryKey,
  fetchFunction: FetchFunction<T, P>,
  additionalParams?: Partial<P>,
): UseInfiniteQueryResult<InfiniteQueryResponse<T>, Error> {
  return useInfiniteQuery({
    queryKey: additionalParams ? [...queryKey, additionalParams] : queryKey,
    queryFn: ({ pageParam }) => {
      const params = { pageParam } as FetchParams & Partial<P>;
      if (additionalParams) {
        Object.assign(params, additionalParams);
      }
      return fetchFunction(params);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      lastPage.hasNext ? lastPageParam + 1 : undefined,
  });
}
