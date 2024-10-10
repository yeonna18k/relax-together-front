import { GatheringLocation, GatheringType } from '@/shared/model';

export interface Review {
  gatheringType: GatheringType;
  gatheringLocation: GatheringLocation;
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
