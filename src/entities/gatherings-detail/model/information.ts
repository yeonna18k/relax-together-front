export type GatheringsInfoTypes = {
  id: number;
  hostUser: number;
  name: string;
  location: string;
  type: string;
  capacity: number;
  imageUrl: string;
  participantCount: number;
  dateTime: string;
  registrationEnd: string;
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
