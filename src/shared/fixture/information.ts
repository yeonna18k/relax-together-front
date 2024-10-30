import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '@/entities/gatherings-detail/model/information';

export const dummyGatheringsInfo: GatheringsInfoTypes = {
  id: 0,
  hostUser: 0,
  name: null,
  location: '을지로3가',
  type: '오피스 스트레칭',
  capacity: 5,
  imageUrl: '/assets/mind-full-ness.svg',
  participantCount: 5,
  dateTime: '2024-09-26T03:10:32.409Z',
  registrationEnd: '2024-09-26T03:10:32.409Z',
  status: 'ONGOING',
};

export const dummyParticipantList: ParticipantListTypes = {
  gatheringId: 0,
  participants: Array.from({ length: 5 }, (_, index) => ({
    userId: index,
    name: `럽윈즈올${index}`,
    email: 'codeit@codeit.com',
    companyName: '코드잇',
    profileImage: '/assets/user-profile-image.svg',
    joinedAt: '2024-10-26T16:12:29.975Z',
  })),
  currentPage: 0,
  totalPages: 1,
  totalElements: 5,
};
