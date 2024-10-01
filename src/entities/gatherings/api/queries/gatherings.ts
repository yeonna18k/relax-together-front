import { fetchGatherings } from '@/entities/gatherings/api/gatherings';
import { FilterParams } from '@/entities/gatherings/model/params';
import { useCommonInfiniteData } from '@/entities/mypage/api/queries/common';
import { Gathering } from '@/shared/model';

export function useGatheringsData(additionalParams: Partial<FilterParams>) {
  return useCommonInfiniteData<Gathering, Partial<FilterParams>>(
    ['gatherings', additionalParams],
    fetchGatherings,
    additionalParams,
  );
}

export const additionalParams: Partial<FilterParams> = {
  type: '달램핏',
  location: undefined,
  date: undefined,
  sortBy: 'registrationEnd',
};
