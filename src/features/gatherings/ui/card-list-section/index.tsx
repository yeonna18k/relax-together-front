'use client';

import { useGatheringsData } from '@/entities/gatherings/api/queries/gatherings';
import GatheringCard from '@/entities/gatherings/ui/card';
import useAdditionalParams from '@/features/gatherings/model/hook/useAdditionalParams';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';

import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import ContentEmptySection from '@/shared/common/ui/content-empty-section';
import CommonMoreInfoWrapper from '@/shared/common/ui/more-info-card/CommonBlurCardWrapper';
import MotionListItem from '@/shared/common/ui/motion-list-item';
import { getTimeUntilDeadline } from '@/shared/lib/utils';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function GatheringCardListSection() {
  const { additionalParams } = useAdditionalParams();

  const { data, fetchNextPage, isFetching } =
    useGatheringsData(additionalParams);

  const { ref, inView } = useInView();

  // 무한 스크롤: inView가 true일 때만 fetchNextPage를 호출
  useEffect(() => {
    if (inView && !isFetching) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, isFetching]); // isFetching 추가하여 중복 호출 방지

  if (isFetching && !data) {
    return <LoadingSkeletonList />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div className="w-full xl:w-[996px]">
        {data && data.pages[0].totalElements > 0 ? (
          <ScrollSection
            ref={ref}
            className="mt-2.5 w-full md:mt-0 xl:mb-10 xl:max-h-[calc(100vh-530px)]"
          >
            {data.pages.map((page, index) => (
              <motion.ul key={`gatherings-${page}-${index}`}>
                {page.content.map((gathering, idx) => (
                  <MotionListItem key={gathering.id} index={idx}>
                    <CommonMoreInfoWrapper id={gathering.id}>
                      <GatheringCard
                        message={getTimeUntilDeadline(
                          new Date(gathering.registrationEnd),
                        )}
                        {...gathering}
                      />
                    </CommonMoreInfoWrapper>
                  </MotionListItem>
                ))}
              </motion.ul>
            ))}
            <div ref={ref} />
          </ScrollSection>
        ) : (
          <ContentEmptySection
            description="신청한 모임이 아직 없어요"
            className="m-0 xl:min-h-[calc(100vh-880px)]"
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
