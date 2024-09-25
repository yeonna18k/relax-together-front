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

type FetchFunction<T> = ({ pageParam }: FetchParams) => Promise<Response<T>>;

export function useCommonInfiniteData<T>(
  queryKey: QueryKey,
  fetchFunction: FetchFunction<T>,
): UseInfiniteQueryResult<InfiniteQueryResponse<T>, Error> {
  return useInfiniteQuery({
    queryKey,
    queryFn: fetchFunction,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) =>
      lastPage.hasNext ? lastPageParam + 1 : undefined,
  });
}
