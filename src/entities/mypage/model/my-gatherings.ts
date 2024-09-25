import { GatheringLocation, GatheringType } from '@/shared/model';

export type MyGatheringStatus = 'ONGOING' | 'CANCELLED';

export interface MyGathering {
  id: number;
  type: GatheringType;
  name: string | null;
  dateTime: string;
  registrationEnd: string;
  location: GatheringLocation;
  participantCount: number;
  capacity: number;
  imageUrl: string;
  hostUser: number;
  status?: MyGatheringStatus;
  completed?: boolean;
}
