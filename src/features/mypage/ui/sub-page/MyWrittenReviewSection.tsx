'use client';

import { useMyWrittenReviewsData } from '@/entities/mypage/api/queries/my-written-reviews';
import ContentEmptySection from '@/features/mypage/ui/sub-page/ContentEmptySection';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import ReviewCard from '@/shared/common/ui/review-card';
import { Page } from '@/shared/lib/constants';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MyWrittenReviewSection() {
  const { data, fetchNextPage, status } = useMyWrittenReviewsData();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending' || !data) {
    return <LoadingSkeletonList />;
  }
  return data.pages[0].totalElements > 0 ? (
    <ScrollSection ref={ref}>
      {data?.pages.map((page, index) => (
        <ul key={`my-written-reviews-${page}-${index}`}>
          {page.content.map((review, i) => (
            <li
              key={`${review.gatheringType}-${i}`}
              className="py-6 first:pt-0"
            >
              <ReviewCard page={Page.MYPAGE} {...review} />
            </li>
          ))}
        </ul>
      ))}
      <div ref={ref} />
    </ScrollSection>
  ) : (
    <ContentEmptySection description="아직 작성 가능한 리뷰가 없어요" />
  );
}
