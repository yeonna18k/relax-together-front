'use client';

import GatheringCard from '@/entities/gatherings/ui/card';
import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import ContentEmptySection from '@/shared/common/ui/content-empty-section';
import { useSearchFilter } from '@/shared/hooks/useSearchFilter';
import { getTimeUntilDeadline } from '@/shared/lib/utils';
import { GatheringLocation, GatheringType } from '@/shared/model';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLikeGatheringsData } from '../../api/queries/like-gatherings';

const getCurrentTypeMap: Record<string, GatheringType> = {
  dalaemfit_all: '달램핏',
  dalaemfit_office_stretching: '오피스 스트레칭',
  dalaemfit_mindfulness: '마인드풀니스',
  workation: '워케이션',
};

export default function LikeGatheringCardList() {
  const { currentSubPage, currentFilter } = useCommonSearchParams();
  const { searchFilterValues } = useSearchFilter();

  const target =
    currentSubPage === 'workation'
      ? currentSubPage
      : `${currentSubPage}_${currentFilter}`;

  const type = getCurrentTypeMap[target];

  const { data, fetchNextPage, status } = useLikeGatheringsData({
    type,
    location:
      searchFilterValues.selectedValue === 'ALL'
        ? undefined
        : searchFilterValues.selectedValue,
    date: searchFilterValues.date
      ? format(searchFilterValues.date, 'yyyy-MM-dd')
      : undefined,
    sortBy: searchFilterValues.selectedSortValue,
  });

  let likeIds = '[]';

  if (typeof window !== 'undefined') {
    likeIds = localStorage.getItem('liked-gatherings-ids') || '[]';
  }

  const parsedLikeIds = JSON.parse(likeIds);

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
  return data.pages[0].totalElements > 0 ? (
    <ScrollSection
      ref={ref}
      className="mt-0 w-full lg:max-h-[calc(100vh-455px)] xl:w-[996px]"
    >
      {filteredData?.map((page, index) => (
        <ul key={`like-gatherings-${page}-${index}`} className="space-y-6">
          {page.map(gathering => (
            <li key={gathering.id}>
              <GatheringCard
                capacity={gathering.capacity}
                dateTime={gathering.dateTime}
                hostUser={gathering.hostUser}
                id={gathering.id}
                imageUrl={gathering.imageUrl}
                location={gathering.location as GatheringLocation}
                name={gathering.name}
                participantCount={gathering.participantCount}
                registrationEnd={gathering.registrationEnd}
                type={gathering.type as GatheringType}
                message={getTimeUntilDeadline(
                  new Date(gathering.registrationEnd),
                )}
              />
            </li>
          ))}
        </ul>
      ))}
      <div ref={ref} />
    </ScrollSection>
  ) : (
    <ContentEmptySection description="신청한 모임이 아직 없어요" />
  );
}
