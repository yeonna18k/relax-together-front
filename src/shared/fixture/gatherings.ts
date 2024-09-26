import { MAX_CAPACITY } from '@/shared/lib/constants';
import { getISOTimeWithOffset } from '@/shared/lib/utils';
import { Gathering, Response } from '@/shared/model';

export const gatheringsContents: Array<Gathering> = Array.from({
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
        ? '2024-09-23T07:30:24.329Z'
        : condition === 1
          ? getISOTimeWithOffset(-4)
          : getISOTimeWithOffset(4),
    registrationEnd: '2024-09-23T07:30:24.330Z',
    location: '건대입구',
    participantCount: condition === 0 ? 4 : condition === 1 ? 10 : 20,
    capacity: MAX_CAPACITY,
    imageUrl: `/assets/sample${condition + 1}.png`,
    hostUser: 0,
  };
});
export const gatheringsDummyData: Response<Gathering> = {
  content: gatheringsContents,
  hasNext: true,
  totalElements: 0,
};
