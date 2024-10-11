'use client';

import { useMyPendingReviewsData } from '@/entities/mypage/api/queries/my-pending-reviews';
import MypageCard from '@/entities/mypage/ui/card';

import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import ContentEmptySection from '@/shared/common/ui/content-empty-section';
import MotionListItem from '@/shared/common/ui/motion-list-item';
import useMswApiMock from '@/shared/hooks/useMswApiMock';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MyPendingReviewSection() {
  useMswApiMock();
  const { data, fetchNextPage } = useMyPendingReviewsData();

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
            <ul key={`my-pending-reviews-${page}-${index}`}>
              {page.content.map((gathering, idx) => (
                <MotionListItem key={gathering.id} index={idx}>
                  <MypageCard alt="my-gatherings-image" {...gathering} />
                </MotionListItem>
              ))}
            </ul>
          ))}
        </ScrollSection>
      ) : (
        <ContentEmptySection description="아직 작성 가능한 리뷰가 없어요" />
      )}
    </AnimatePresence>
  );
}
