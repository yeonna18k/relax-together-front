'use client';
import useAdditionalParams from '@/features/gatherings/model/hook/useAdditionalParams';
import ReviewCard from '@/shared/common/ui/review-card';
import { myWrittenReviewsDummyData } from '@/shared/fixture/my-written-reviews';
import { Review } from '@/shared/model';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useReviewsData } from '../../api/queries/reviews';

export default function ReviewList() {
  const reviews: Review[] = myWrittenReviewsDummyData.content;
  const { additionalParams } = useAdditionalParams();
  const { data, fetchNextPage, isFetching } = useReviewsData(additionalParams);
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
