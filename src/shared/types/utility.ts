import {
  ChipStateType,
  DeviceType,
  FilterIconType,
  FilterNames,
  Filters,
  FilterSize,
  SortBy,
  SortOrder,
  SubPage,
} from '@/shared/lib/constants';

export type ValueOf<T> = T[keyof T];

export type DeviceValueType = ValueOf<typeof DeviceType>;
export type SubPageValueType = ValueOf<typeof SubPage>;
export type FilterIconValueType = ValueOf<typeof FilterIconType>;
export type FilterSizeValueType = ValueOf<typeof FilterSize>;
export type SortOrderValueType = ValueOf<typeof SortOrder>;
export type SortByValueType = ValueOf<typeof SortBy>;
export type FiltersValueType = ValueOf<typeof Filters>;
export type FiltersNameValueType = ValueOf<typeof FilterNames>;
export type ChipStateValueType = ValueOf<typeof ChipStateType>;
