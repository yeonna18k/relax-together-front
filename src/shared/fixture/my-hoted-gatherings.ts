import { MyHostedGathering } from '@/entities/mypage/model/';
import { MAX_CAPACITY } from '@/shared/lib/constants';
import { Response } from '@/shared/model';

export const myHostedGatheringsContents: Array<MyHostedGathering> = Array.from({
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
      condition === 0 ? '2024-09-23T07:30:24.329Z' : '2024-09-25T07:30:24.329Z',
    registrationEnd: '2024-09-23T07:30:24.330Z',
    location: '건대입구',
    participantCount: condition === 0 ? 4 : condition === 1 ? 10 : 20,
    capacity: MAX_CAPACITY,
    imageUrl: `/assets/sample${condition + 1}.png`,
    hostUser: 0,
  };
});
export const myHostedGatheringsDummyData: Response<MyHostedGathering> = {
  content: myHostedGatheringsContents,
  hasNext: true,
  totalElements: 0,
};
