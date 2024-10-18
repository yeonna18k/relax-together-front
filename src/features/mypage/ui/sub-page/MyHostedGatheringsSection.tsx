'use client';

import { useMyHostedGatheringsData } from '@/entities/mypage/api/queries';
import MypageCard from '@/entities/mypage/ui/card';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';

import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import CommonBlurCardWrapper from '@/shared/common/ui/blur-card/CommonBlurCardWrapper';
import ContentEmptySection from '@/shared/common/ui/content-empty-section';

import MotionListItem from '@/shared/common/ui/motion-list-item';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MyHostedGatheringsSection() {
  const { data, fetchNextPage, isFetching } = useMyHostedGatheringsData();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isFetching) {
    return <LoadingSkeletonList />;
  }

  return (
    <AnimatePresence mode="wait">
      {data && data.pages[0].totalElements > 0 ? (
        <ScrollSection ref={ref}>
          {data.pages.map((page, index) => (
            <ul key={`my-hosted-gatherings-${page}-${index}`}>
              {page.content.map((gathering, idx) => (
                <MotionListItem key={gathering.id} index={idx}>
                  <CommonBlurCardWrapper id={gathering.id}>
                    <MypageCard
                      alt="my-hosted-gatherings-image"
                      {...gathering}
                    />
                  </CommonBlurCardWrapper>
                </MotionListItem>
              ))}
            </ul>
          ))}
        </ScrollSection>
      ) : (
        <ContentEmptySection description="아직 만든 모임이 없어요" />
      )}
    </AnimatePresence>
  );
}
