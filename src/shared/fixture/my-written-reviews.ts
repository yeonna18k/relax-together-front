import { Response, Review } from '@/shared/model';

export const myWrittenReviewsContents: Array<Review> = Array.from({
  length: 100,
}).map((_, index) => {
  const condition = index % 3;
  return {
    gatheringType:
      condition === 0
        ? '오피스 스트레칭'
        : condition === 1
          ? '마인드풀니스'
          : '워케이션',
    gatheringLocation:
      condition === 0 ? '건대입구' : condition === 1 ? '을지로3가' : '신림',
    userProfileImage: '/assets/profile.svg',
    userName: 'test',
    score: condition === 0 ? 5 : condition === 1 ? 3 : 1,
    comment:
      condition === 0
        ? '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.'
        : '강사분도 친절하시고 ~ ^^ 너무 좋은 공간에서 긴장과 스트레스 모두 잘 풀고 가요 ~ ^^',
    createdDate:
      condition === 0 ? '2024-09-23T07:30:24.329Z' : '2024-09-25T07:30:24.329Z',
  };
});
export const myWrittenReviewsDummyData: Response<Review> = {
  content: myWrittenReviewsContents,
  hasNext: true,
  totalElements: 0,
};
