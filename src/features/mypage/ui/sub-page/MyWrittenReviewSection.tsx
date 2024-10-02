'use client';

import { useMyWrittenReviewsData } from '@/entities/mypage/api/queries/my-written-reviews';

import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import ContentEmptySection from '@/shared/common/ui/content-empty-section';
import MotionListItem from '@/shared/common/ui/motion-list-item';
import ReviewCard from '@/shared/common/ui/review-card';
import { Page } from '@/shared/lib/constants';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MyWrittenReviewSection() {
  const { data, fetchNextPage } = useMyWrittenReviewsData();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <AnimatePresence mode="wait">
      {data && data.pages[0].totalElements > 0 ? (
        <ScrollSection ref={ref}>
          {data.pages.map((page, index) => (
            <ul key={`my-written-reviews-${page}-${index}`}>
              {page.content.map((review, i) => (
                <MotionListItem
                  key={`${review.gatheringType}-${i}`}
                  className="py-6 first:pt-0"
                  index={i}
                >
                  <ReviewCard page={Page.MYPAGE} {...review} />
                </MotionListItem>
              ))}
            </ul>
          ))}
          <div ref={ref} />
        </ScrollSection>
      ) : (
        <ContentEmptySection description="아직 작성 가능한 리뷰가 없어요" />
      )}
    </AnimatePresence>
  );
}
