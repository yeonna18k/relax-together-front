'use client';

import ApiService from '@/shared/api/service/ApiService';

export default function useAccessToken() {
  const setAccessToken = (token: string) => {
    ApiService.getInstance().setAccessToken(token);
  };

  return { setAccessToken };
}
