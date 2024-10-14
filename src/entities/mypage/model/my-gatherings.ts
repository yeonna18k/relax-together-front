import { Gathering } from '@/shared/model';

export type MyGatheringStatus = 'ONGOING' | 'CANCELLED';

export interface MyGathering extends Omit<Gathering, 'ended'> {
  reviewed?: boolean;
  status?: MyGatheringStatus;
  completed?: boolean;
}
