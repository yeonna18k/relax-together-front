import { FiltersValueType } from '@/entities/mypage/model/hooks/useCommonSearchParams';
import { FilterNames, Filters } from '@/shared/lib/constants';
import { ValueOf } from '@/shared/types/utility';

export type FiltersNameValueType = ValueOf<typeof FilterNames>;

export type Filter = {
  name: FiltersNameValueType;
  filter: FiltersValueType;
};

export const mypageFilters: Array<Filter> = [
  { name: FilterNames.PENDING, filter: Filters.PENDING },
  { name: FilterNames.WRITTEN, filter: Filters.WRITTEN },
];

export const commonFilters: Array<Filter> = [
  { name: FilterNames.ALL, filter: Filters.ALL },
  { name: FilterNames.OFFICE_STRETCHING, filter: Filters.OFFICE_STRETCHING },
  { name: FilterNames.MINDFULNESS, filter: Filters.MINDFULNESS },
];
