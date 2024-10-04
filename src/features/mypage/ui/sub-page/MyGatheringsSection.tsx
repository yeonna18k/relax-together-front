'use client';

import { useMyGatheringsData } from '@/entities/mypage/api/queries';
import MypageCard from '@/entities/mypage/ui/card';

import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import CommonBlurCardWrapper from '@/shared/common/ui/blur-card/CommonBlurCardWrapper';
import ContentEmptySection from '@/shared/common/ui/content-empty-section';
import MotionListItem from '@/shared/common/ui/motion-list-item';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MyGatheringsSection() {
  const { data, fetchNextPage } = useMyGatheringsData();

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
            <ul key={`my-gatherings-${page}-${index}`}>
              {page.content.map((gathering, idx) => (
                <MotionListItem key={gathering.id} index={idx}>
                  <CommonBlurCardWrapper
                    id={gathering.id}
                    status={gathering.status}
                  >
                    <MypageCard alt="my-gatherings-image" {...gathering} />
                  </CommonBlurCardWrapper>
                </MotionListItem>
              ))}
            </ul>
          ))}
          <div ref={ref} />
        </ScrollSection>
      ) : (
        <ContentEmptySection
          description={
            <div className="text-center">
              아직 모임이 없어요,
              <br />
              지금 바로 모임을 만들어보세요
            </div>
          }
        />
      )}
    </AnimatePresence>
  );
}
