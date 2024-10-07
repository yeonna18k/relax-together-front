import { addDays, addHours } from 'date-fns';

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

export const NOW = new Date();
export const NOW_BASE_CREATE_DATE = addHours(NOW, 3);
export const NOW_BASE_CREATE_HOUR = NOW_BASE_CREATE_DATE.getHours();
export const FUTURE_CREATE_DATE = addDays(NOW, 1);
export const FUTURE_CREATE_HOUR = 9;

export const Page = {
  MYPAGE: 'MYPAGE',
  GATHERING_DETAIL: 'GATHERING_DETAIL',
  ALL_REVIEWS: 'ALL_REVIEWS',
} as const;

export const Path = {
  mypage: 'mypage',
  gatherings: 'gatherings',
  reviews: 'reviews',
  'like-gatherings': 'like-gatherings',
  signin: 'signin',
} as const;

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_API_URL;
