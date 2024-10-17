import { PaginationParams } from '@/entities/mypage/model';
import { GatheringLocation, GatheringType } from '@/shared/model';
import { SortByValueType, SortOrderValueType } from '@/shared/types/utility';

export type FilterParams = {
  name: string;
  type: GatheringType;
  location?: GatheringLocation;
  date?: string;
  sortBy?: SortByValueType;
  sortOrder?: SortOrderValueType;
} & PaginationParams;
