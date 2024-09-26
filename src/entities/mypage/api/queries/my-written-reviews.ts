import { fetchWrittenReviews } from '@/entities/mypage/api/my-written-reviews';
import { useCommonInfiniteData } from '@/entities/mypage/api/queries/common';
import { Review } from '@/shared/model/review';

export function useMyWrittenReviewsData() {
  return useCommonInfiniteData<Review>(
    ['myWrittenReviews'],
    fetchWrittenReviews,
  );
}
