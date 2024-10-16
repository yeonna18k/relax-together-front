'use client';

import GatheringCard from '@/entities/gatherings/ui/card';
import useAdditionalParams from '@/features/gatherings/model/hook/useAdditionalParams';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import ContentEmptySection from '@/shared/common/ui/content-empty-section';
import CommonMoreInfoWrapper from '@/shared/common/ui/more-info-card/CommonMoreInfoWrapper';
import MotionListItem from '@/shared/common/ui/motion-list-item';
import { getTimeUntilDeadline } from '@/shared/lib/utils';
import { GatheringType } from '@/shared/model';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLikeGatheringsData } from '../../api/queries/like-gatherings';

const getCurrentTypeMap: Record<string, GatheringType> = {
  dalaemfit_all: '달램핏',
  dalaemfit_office_stretching: '오피스 스트레칭',
  dalaemfit_mindfulness: '마인드풀니스',
  workation: '워케이션',
};

export default function LikeGatheringCardList() {
  const { additionalParams } = useAdditionalParams();

  const [parsedLikeIds, setParsedLikeIds] = useState<string[]>([]);

  const { data, fetchNextPage, status } =
    useLikeGatheringsData(additionalParams);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const likeIds = localStorage.getItem('liked-gatherings-ids') || '[]';
      setParsedLikeIds(JSON.parse(likeIds));
    }
  }, []);

  const filteredData = data?.pages.map(page => {
    const filteredContent = page.content.filter(item =>
      parsedLikeIds.includes(String(item.id)),
    );
    return filteredContent;
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending' || !data) {
    return <LoadingSkeletonList />;
  }

  return filteredData && filteredData[0].length > 0 ? (
    <div
      ref={ref}
      className="mt-0 w-full lg:max-h-[calc(100vh-455px)] xl:w-[996px]"
    >
      <ul className="mt-2.5 md:mt-0 xl:mb-10">
        {filteredData?.map(page =>
          page.map((gathering, idx) => (
            <MotionListItem key={gathering.id} index={idx}>
              <CommonMoreInfoWrapper id={gathering.id} status={gathering.ended}>
                <GatheringCard
                  message={getTimeUntilDeadline(
                    new Date(gathering.registrationEnd),
                  )}
                  {...gathering}
                />
              </CommonMoreInfoWrapper>
            </MotionListItem>
          )),
        )}
      </ul>
      <div ref={ref} />
    </div>
  ) : (
    <ContentEmptySection description="아직 찜한 모임이 없어요" />
  );
}
