import { Gathering } from '@/shared/model';

export type GatheringsInfoTypes = Gathering & {
  status: string;
};

export type Participants = {
  userId: number;
  name: string;
  email: string;
  companyName: string;
  profileImage: string;
  joinedAt: string;
};

export type ParticipantListTypes = {
  gatheringId: number;
  participants: Participants[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
};
