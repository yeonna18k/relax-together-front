import { ValueOf } from '@/shared/types/utility';

export const FilterIconType = {
  DEFAULT: 'default',
  SORT: 'sort',
} as const;

export const CommonSize = {
  SMALL: 'sm',
  LARGE: 'lg',
} as const;

export const ChipStateType = {
  SCHEDULED: 'scheduled',
  COMPLETED: 'completed',
  CONFIRMED: 'confirmed',
  PENDING: 'pending',
} as const;

export const ChipInfoType = {
  DATE: 'date',
  TIME: 'time',
} as const;

export type CommonSizeValueType = ValueOf<typeof CommonSize>;
