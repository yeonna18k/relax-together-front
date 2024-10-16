import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import { MAX_CAPACITY } from '@/shared/lib/constants';
import { getISOTimeWithOffset } from '@/shared/lib/utils';
import { Response } from '@/shared/model';

export const myGatheringsContents: Array<MyGathering> = Array.from({
  length: 100,
}).map((_, index) => {
  const condition = index % 3;
  return {
    id: index,
    type:
      condition === 0
        ? '오피스 스트레칭'
        : condition === 1
          ? '마인드풀니스'
          : '워케이션',
    name: null,
    dateTime:
      condition === 0
        ? getISOTimeWithOffset(0)
        : condition === 1
          ? getISOTimeWithOffset(-4)
          : getISOTimeWithOffset(4),
    registrationEnd: getISOTimeWithOffset(48),
    location: '건대입구',
    participantCount: condition === 0 ? 4 : condition === 1 ? 10 : 20,
    capacity: MAX_CAPACITY,
    imageUrl: `/assets/sample${condition + 1}.png`,
    hostUser: 0,
    status: condition === 2 ? 'CANCELLED' : 'ONGOING',
    reviewed: condition === 0 ? true : false,
    completed: true,
  };
});
export const myGatheringsDummyData: Response<MyGathering> = {
  content: myGatheringsContents,
  hasNext: true,
  totalElements: myGatheringsContents.length,
};
