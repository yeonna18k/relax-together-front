'use client';
import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import { getCurrentTypeMap } from '@/features/gatherings/ui/card-list-section';
import ReviewCard from '@/shared/common/ui/review-card';
import { myWrittenReviewsDummyData } from '@/shared/fixture/my-written-reviews';
import { useSearchFilter } from '@/shared/hooks/useSearchFilter';
import { Review } from '@/shared/model';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useReviewsData } from '../../api/queries/reviews';

export default function ReviewList() {
  const reviews: Review[] = myWrittenReviewsDummyData.content;
  const { currentSubPage, currentFilter } = useCommonSearchParams();
  const { searchFilterValues } = useSearchFilter();
  const target =
    currentSubPage === 'workation'
      ? currentSubPage
      : `${currentSubPage}_${currentFilter}`;
  const type = getCurrentTypeMap[target];
  const { data, fetchNextPage, isFetching } = useReviewsData({
    type,
    location:
      searchFilterValues.selectedValue === 'ALL'
        ? undefined
        : searchFilterValues.selectedValue,
    date: searchFilterValues.date
      ? format(searchFilterValues.date, 'yyyy-MM-dd')
      : undefined,
    sortBy: searchFilterValues.selectedSortValue,
  });
  console.log(data);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="flex flex-col gap-6">
      {reviews.map((review, index) => {
        return (
          <ReviewCard
            key={`${review.createdDate}-${review.userName}-${index}`}
            page="ALL_REVIEWS"
            gatheringType={review.gatheringType}
            gatheringLocation={review.gatheringLocation}
            userProfileImage={review.userProfileImage}
            userName={review.userName}
            score={review.score}
            comment={review.comment}
            createdDate={review.createdDate}
          />
        );
      })}
      <div ref={ref} />
    </div>
  );
}
