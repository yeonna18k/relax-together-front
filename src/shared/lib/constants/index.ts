export * from './filters';
export * from './gatherings';
export * from './modals';
export * from './pages';
export * from './params';
export * from './ui';
export * from './viewport';

export const MAX_CAPACITY = 20;
export const MIN_PARTICIPANT = 5;
export const MAX_SCORE = 5;
export const MAX_REVIEW_TEXT_COUNT = 1000;

export const REVIEWS_PER_PAGE = 4;

export const LIMIT = 10;

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.NEXT_PUBLIC_API_URL;

export const ACCESS_TOKEN_KEY = 'accessToken';
