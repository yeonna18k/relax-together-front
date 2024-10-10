import { FilterParams } from '@/entities/gatherings/model/params';
import { useCommonInfiniteData } from '@/entities/mypage/api/queries';
import { Review } from '@/shared/model';
import { useQuery } from '@tanstack/react-query';
import { fetchReviews, fetchReviewScore } from '../reviews';

export function useReviewsData(additionalParams: Partial<FilterParams>) {
  return useCommonInfiniteData<Review, Partial<FilterParams>>(
    ['reviews', additionalParams],
    fetchReviews,
    additionalParams,
  );
}

export function useReviewScoreQuery({ type }: Partial<FilterParams>) {
  const { data } = useQuery({
    queryKey: ['reviewScore', type],
    queryFn: () => fetchReviewScore({ type }),
  });
  return { data };
}
