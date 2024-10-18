'use client';
import useAdditionalParams from '@/features/gatherings/model/hook/useAdditionalParams';
import ReviewCard from '@/shared/common/ui/review-card';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useReviewsData } from '../../api/queries/reviews';

export default function ReviewList() {
  const { additionalParams } = useAdditionalParams();
  const { data, fetchNextPage } = useReviewsData(additionalParams);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div>
      {data && data.pages[0].totalElements > 0 ? (
        <>
          {data?.pages.map((page, index) => (
            <div
              key={`reviews-${page}-${index}`}
              className="mb-6 flex flex-col gap-6"
            >
              {page.content.map((review, index) => {
                return (
                  <ReviewCard
                    key={`${review.createdDate}-${review.userName}-${index}`}
                    page="ALL_REVIEWS"
                    gatheringType={review.gatheringType}
                    gatheringLocation={review.gatheringLocation}
                    gatheringImage={review.gatheringImage}
                    userProfileImage={review.userProfileImage}
                    userName={review.userName}
                    score={review.score}
                    comment={review.comment}
                    createdDate={review.createdDate}
                  />
                );
              })}
            </div>
          ))}
        </>
      ) : (
        <div className="min-h-[calc(100vh-550px)] w-full content-center text-center text-sm font-medium text-gray-500 lg:min-h-[calc(100vh-650px)]">
          아직 리뷰가 없어요
        </div>
      )}

      <div ref={ref} />
    </div>
  );
}
