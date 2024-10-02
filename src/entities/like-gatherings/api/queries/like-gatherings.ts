import { FilterParams } from '@/entities/gatherings/model/params';
import { useCommonInfiniteData } from '@/entities/mypage/api/queries/common';
import { Gathering } from '@/shared/model';
import { fetchLikeGatherings } from '../like-gatherings';

export function useLikeGatheringsData(additionalParams: Partial<FilterParams>) {
  return useCommonInfiniteData<Gathering, Partial<FilterParams>>(
    ['like-gatherings', additionalParams],
    fetchLikeGatherings,
    additionalParams,
  );
}

export const additionalParams: Partial<FilterParams> = {
  type: '달램핏',
  location: undefined,
  date: undefined,
  sortBy: 'registrationEnd',
};
