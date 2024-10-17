import { GatheringLocation, GatheringType } from '@/shared/lib/constants';
import { ValueOf } from '@/shared/types/utility';

export type GatheringValueType = ValueOf<typeof GatheringType>;
export type GatheringLocationValueType = ValueOf<typeof GatheringLocation>;

export interface Gathering {
  id: number;
  type: GatheringValueType;
  name: string | null;
  dateTime: string;
  registrationEnd: string;
  location: GatheringLocationValueType;
  participantCount: number;
  capacity: number;
  imageUrl: string;
  hostUser: number;
  ended: boolean;
}
