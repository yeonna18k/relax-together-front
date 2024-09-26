export const Device = {
  mobile: 430,
  tablet: 744,
  desktop: 1200,
} as const;

export const MAX_CAPACITY = 20;
export const MIN_PARTICIPANT = 5;
export const MAX_SCORE = 5;

export const REVIEWS_PER_PAGE = 4;

export const LIMIT = 10;

export const Page = {
  MYPAGE: 'MYPAGE',
  GATHERING_DETAIL: 'GATHERING_DETAIL',
  ALL_REVIEWS: 'ALL_REVIEWS',
} as const;

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://dev.relax-together.shop';
