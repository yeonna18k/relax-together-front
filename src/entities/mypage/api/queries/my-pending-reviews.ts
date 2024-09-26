import { fetchMyPendingReviews } from '@/entities/mypage/api/my-pending-reviews';
import { useCommonInfiniteData } from '@/entities/mypage/api/queries/common';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';

export function useMyPendingReviewsData() {
  return useCommonInfiniteData<MyGathering>(
    ['myPendingReviews'],
    fetchMyPendingReviews,
  );
}
