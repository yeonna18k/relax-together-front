import { Gathering } from '@/shared/model';

export type MyGatheringStatus = 'ONGOING' | 'CANCELLED';

export interface MyGathering extends Gathering {
  reviewed?: boolean;
  status?: MyGatheringStatus;
  completed?: boolean;
}
