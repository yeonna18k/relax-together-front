export type Filter = {
  name: string;
  filter: string;
};

export const mypageFilters: Array<Filter> = [
  { name: '작성 가능한 리뷰', filter: 'pending' },
  { name: '작성한 리뷰', filter: 'written' },
];

export const commonFilters: Array<Filter> = [
  { name: '전체', filter: 'all' },
  { name: '오피스 스트레칭', filter: 'office-stretching' },
  { name: '마인드풀니스', filter: 'mindfulness' },
];
