export const ModalType = {
  CREATE_GATHERING: 'createGathering',
  CREATE_SUCCESS: 'createSuccess',
  WRITE_REVIEW: 'writeReview',
  PROFILE_UPDATE: 'profileUpdate',
  LOGIN_REQUIRED: 'loginRequired',
  TOKEN_EXPIRED: 'tokenExpired',
  FORGOT_PASSWORD: 'forgotPassword',
  RESET_SUCCESS: 'resetSuccess',
  EMAIL_AUTH: 'emailAuth',
  SHARE_CONFIRM: 'shareConfirm',
  CANCEL_CONFIRM: 'cancelConfirm',
} as const;

export const ModalVariant = {
  DEFAULT: 'default',
  NOTICE: 'notice',
  SINGLE: 'single',
} as const;
