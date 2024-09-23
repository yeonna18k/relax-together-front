import { User } from '@/entities/mypage/model/user';

export const dummyUser: User = {
  id: 1,
  email: 'test@example.com',
  name: 'test',
  companyName: 'test company',
  image: '/assets/default-user.svg',
  createdAt: '2024-10-01T00:00:00Z',
  updatedAt: '2024-10-01T00:00:00Z',
};
