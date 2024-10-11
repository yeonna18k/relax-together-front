import { FilterParams } from '@/entities/gatherings/model/params';
import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import { useSearchFilter } from '@/shared/hooks/useSearchFilter';
import { GatheringType } from '@/shared/model';
import { endOfDay } from 'date-fns';

const getCurrentTypeMap: Record<string, GatheringType> = {
  dalaemfit_all: '달램핏',
  dalaemfit_office_stretching: '오피스 스트레칭',
  dalaemfit_mindfulness: '마인드풀니스',
  workation: '워케이션',
};

export default function useAdditionalParams() {
  const { currentSubPage, currentFilter } = useCommonSearchParams();
  const { searchFilterValues } = useSearchFilter();

  // SubPage와 Filter 값을 결합하여 타입 결정
  const target =
    currentSubPage === 'workation'
      ? currentSubPage
      : `${currentSubPage}_${currentFilter}`;

  // 타입을 가져오거나 기본값을 설정
  const type = getCurrentTypeMap[target] || '달램핏'; // 기본값을 '달램핏'으로 설정

  const additionalParams: Partial<FilterParams> = {
    type,
    location:
      searchFilterValues.selectedValue === 'ALL'
        ? undefined
        : searchFilterValues.selectedValue, // 선택된 장소가 'ALL'이면 undefined
    date: searchFilterValues.date
      ? endOfDay(searchFilterValues.date).toISOString()
      : undefined, // 선택된 날짜가 있으면 ISO 형식으로 변환
    sortBy: searchFilterValues.selectedSortValue, // 선택된 정렬 값
    sortOrder:
      searchFilterValues.selectedSortValue !== 'participantCount'
        ? 'ASC'
        : 'DESC', // 정렬 값에 따라 정렬 순서 결정
  };

  return { additionalParams };
}
