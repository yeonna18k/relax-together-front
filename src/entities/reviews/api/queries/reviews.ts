import { FilterParams } from '@/entities/gatherings/model/params';
import { useCommonInfiniteData } from '@/entities/mypage/api/queries';
import { Review } from '@/shared/model';
import { fetchReviews } from '../reviews';

export function useReviewsData(additionalParams: Partial<FilterParams>) {
  return useCommonInfiniteData<Review, Partial<FilterParams>>(
    ['reviews', additionalParams],
    fetchReviews,
    additionalParams,
  );
}
