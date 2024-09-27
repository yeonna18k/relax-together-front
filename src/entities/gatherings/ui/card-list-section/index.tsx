'use client';

import { useGatheringsData } from '@/entities/gatherings/api/queries/gatherings';
import GatheringCard from '@/entities/gatherings/ui/card';
import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import ContentEmptySection from '@/features/mypage/ui/sub-page/ContentEmptySection';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import { useSearchFilter } from '@/shared/hooks/useSearchFilter';
import { getTimeUntilDeadline } from '@/shared/lib/utils';

import { GatheringType } from '@/shared/model';
import { format } from 'date-fns';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const getCurrentTypeMap: Record<string, GatheringType> = {
  dalaemfit_all: '달램핏',
  dalaemfit_office_stretching: '오피스 스트레칭',
  dalaemfit_mindfulness: '마인드풀니스',
  workation: '워케이션',
};

export default function GatheringCardListSection() {
  const { currentSubPage, currentFilter } = useCommonSearchParams();
  const { searchFilterValues } = useSearchFilter();

  const type = getCurrentTypeMap[`${currentSubPage}_${currentFilter}`];
  const { data, fetchNextPage, status } = useGatheringsData({
    type,
    location:
      searchFilterValues.selectedValue === 'ALL'
        ? undefined
        : searchFilterValues.selectedValue,
    date: searchFilterValues.date
      ? format(searchFilterValues.date, 'yy-MM-dd')
      : undefined,
    sortBy: searchFilterValues.selectedSortValue,
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
      {data?.pages.map((page, index) => (
        <ul key={`gatherings-${page}-${index}`}>
          {page.content.map(gathering => (
            <li
              key={gathering.id}
              className="border-b-2 border-dashed border-gray-300 py-6 first:pt-0"
            >
              <GatheringCard
                message={getTimeUntilDeadline(
                  new Date(gathering.registrationEnd),
                )}
                {...gathering}
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
