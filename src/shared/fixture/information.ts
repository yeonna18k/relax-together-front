import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '@/entities/gatherings-detail/model/information';

export const dummyGatheringsInfo: GatheringsInfoTypes = {
  id: 1,
  hostUser: 0,
  name: '달램핏 오피스 스트레칭',
  location: '을지로 3가 서울시 중구 청계천로 100',
  type: 'string',
  capacity: 5,
  imageUrl: '/assets/mind-full-ness.svg',
  participantCount: 5,
  dateTime: '2024-09-26T03:10:32.409Z',
  registrationEnd: '2024-09-26T03:10:32.409Z',
  status: 'string',
};

export const dummyParticipantList: ParticipantListTypes = {
  gatheringId: 1,
  participants: [
    {
      userId: 1,
      name: '럽윈즈올1',
      email: 'codeit@codeit.com',
      companyName: '코드잇',
      profileImage: '/assets/user-profile-image.svg',
      joinedAt: '2024-09-25T07:29:50.852Z',
    },
    {
      userId: 2,
      name: '럽윈즈올2',
      email: 'codeit@codeit.com',
      companyName: '코드잇',
      profileImage: '/assets/user-profile-image.svg',
      joinedAt: '2024-09-25T07:29:50.852Z',
    },
    {
      userId: 3,
      name: '럽윈즈올3',
      email: 'codeit@codeit.com',
      companyName: '코드잇',
      profileImage: '/assets/user-profile-image.svg',
      joinedAt: '2024-09-25T07:29:50.852Z',
    },
    {
      userId: 4,
      name: '럽윈즈올4',
      email: 'codeit@codeit.com',
      companyName: '코드잇',
      profileImage: '/assets/user-profile-image.svg',
      joinedAt: '2024-09-25T07:29:50.852Z',
    },
    {
      userId: 5,
      name: '럽윈즈올5',
      email: 'codeit@codeit.com',
      companyName: '코드잇',
      profileImage: '/assets/user-profile-image.svg',
      joinedAt: '2024-09-25T07:29:50.852Z',
    },
  ],
  currentPage: 0,
  totalPages: 0,
  totalElements: 5,
};
