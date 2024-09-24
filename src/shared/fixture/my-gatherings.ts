import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import { MAX_CAPACITY } from '@/shared/lib/constants';
import { Response } from '@/shared/model/response';

export const contents: Array<MyGathering> = Array.from({ length: 100 }).map(
  (_, index) => {
    return {
      id: index,
      type: index % 2 === 0 ? '오피스 스트레칭' : '워케이션',
      name: null,
      dateTime:
        index % 2 === 0
          ? '2024-09-23T07:30:24.329Z'
          : '2024-09-25T07:30:24.329Z',
      registrationEnd: '2024-09-23T07:30:24.330Z',
      location: '건대입구',
      participantCount: index % 2 === 0 ? 10 : 20,
      capacity: MAX_CAPACITY,
      imageUrl: '/assets/sample1.png',
      hostUser: 0,
      status: index % 2 === 0 ? 'ONGOING' : 'CANCELLED',
      completed: true,
    };
  },
);
export const myGatheringsDummyData: Response<MyGathering> = {
  content: contents,
  hasNext: true,
  totalElements: 0,
};
