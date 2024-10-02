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
  const target =
    currentSubPage === 'workation'
      ? currentSubPage
      : `${currentSubPage}_${currentFilter}`;
  const type = getCurrentTypeMap[target];
  const additionalParams = {
    type,
    location:
      searchFilterValues.selectedValue === 'ALL'
        ? undefined
        : searchFilterValues.selectedValue,
    date: searchFilterValues.date
      ? endOfDay(searchFilterValues.date).toISOString()
      : undefined,
    sortBy: searchFilterValues.selectedSortValue,
  };
  return { additionalParams };
}
