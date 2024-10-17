import { GatheringLocationValueType, GatheringValueType } from '@/shared/model';

export interface Review {
  gatheringType: GatheringValueType;
  gatheringLocation: GatheringLocationValueType;
  gatheringImage?: string;
  userProfileImage: string;
  userName: string;
  score: number;
  comment: string;
  createdDate: string;
}

export interface ReviewScore {
  fivePoints: number;
  fourPoints: number;
  threePoints: number;
  twoPoints: number;
  onePoints: number;
}
