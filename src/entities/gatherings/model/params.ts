import { PaginationParams } from '@/entities/mypage/model';
import { GatheringLocation, GatheringType } from '@/shared/model';

export type SortBy =
  | 'registrationEnd'
  | 'participantCount'
  | 'createdDate'
  | 'score';

export type SortOrder = 'ASC' | 'DESC';

export type FilterParams = {
  name: string;
  type: GatheringType;
  location?: GatheringLocation;
  date?: string;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
} & PaginationParams;
