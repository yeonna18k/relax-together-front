import { PaginationParams } from '@/entities/mypage/model';
import { SortBy, SortOrder } from '@/shared/lib/constants';
import { GatheringLocationValueType, GatheringValueType } from '@/shared/model';

import { ValueOf } from '@/shared/types/utility';

export type SortOrderValueType = ValueOf<typeof SortOrder>;
export type SortByValueType = ValueOf<typeof SortBy>;

export type FilterParams = {
  name: string;
  type: GatheringValueType;
  location?: GatheringLocationValueType;
  date?: string;
  sortBy?: SortByValueType;
  sortOrder?: SortOrderValueType;
} & PaginationParams;
