export const Page = {
  MYPAGE: 'MYPAGE',
  GATHERING_DETAIL: 'GATHERING_DETAIL',
  ALL_REVIEWS: 'ALL_REVIEWS',
} as const;

export const SubPage = {
  WORKATION: 'workation',
  DALAEMFIT: 'dalaemfit',
  MY_GATHERINGS: 'my-gatherings',
  MY_REVIEWS: 'my-reviews',
  MY_HOSTED_GATHERINGS: 'my-hosted-gatherings',
} as const;

export const TogglePageType = {
  SIGNUP: 'signup',
  SIGNIN: 'signin',
  FORGOT_PASSWORD: 'forgotPassword',
} as const;

export const Path = {
  MYPAGE: 'mypage',
  GATHERINGS: 'gatherings',
  REVIEWS: 'reviews',
  LIKE_GATHERINGS: 'like-gatherings',
  SIGNIN: 'signin',
} as const;
