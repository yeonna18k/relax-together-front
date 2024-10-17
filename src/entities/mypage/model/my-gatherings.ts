import { MyGatheringStatus } from '@/shared/lib/constants';
import { Gathering } from '@/shared/model';
import { ValueOf } from '@/shared/types/utility';

export type MyGatheringValueType = ValueOf<typeof MyGatheringStatus>;

export interface MyGathering extends Omit<Gathering, 'ended'> {
  reviewed?: boolean;
  status?: MyGatheringValueType;
  completed?: boolean;
}
