'use client';

import GatheringCard from '@/entities/gatherings/ui/card';
import useAdditionalParams from '@/features/gatherings/model/hook/useAdditionalParams';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import ContentEmptySection from '@/shared/common/ui/content-empty-section';
import CommonMoreInfoWrapper from '@/shared/common/ui/more-info-card/CommonMoreInfoWrapper';
import MotionListItem from '@/shared/common/ui/motion-list-item';
import { getTimeUntilDeadline } from '@/shared/lib/utils';
import { useLikeStore } from '@/shared/store/useLikeStore';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLikeGatheringsData } from '../../api/queries/like-gatherings';

export default function LikeGatheringCardList() {
  const { additionalParams } = useAdditionalParams();

  const likedIds = useLikeStore(state => state.likedIds);
  const setLikedIds = useLikeStore(state => state.setLikedIds);

  const { data, fetchNextPage, status } =
    useLikeGatheringsData(additionalParams);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLikeIds =
        localStorage.getItem('liked-gatherings-ids') || '[]';
      const parsedLikeIds = JSON.parse(storedLikeIds);
      setLikedIds(parsedLikeIds);
    }
  }, [setLikedIds]);

  const filteredData = data?.pages.flatMap(page =>
    page.content.filter(item => likedIds.includes(String(item.id))),
  );

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending' || !data) {
    return <LoadingSkeletonList />;
  }

  return filteredData && filteredData.length > 0 ? (
    <div className="mt-0 w-full lg:max-h-[calc(100vh-455px)] xl:w-[996px]">
      <ul className="mt-2.5 md:mt-0 xl:mb-10">
        {filteredData.map((gathering, idx) => (
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
        ))}
      </ul>
      <div ref={ref} />
    </div>
  ) : (
    <ContentEmptySection description="아직 찜한 모임이 없어요" />
  );
}
