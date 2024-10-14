'use client';

import ApiService from '@/shared/api/service/ApiService';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function useAccessToken() {
  const [accessToken, setAccessToken] = useLocalStorage('accessToken', '');

  useEffect(() => {
    const instance = ApiService.getInstance();
    instance.setAccessToken(accessToken);
  }, [accessToken]);

  return { accessToken, setAccessToken };
}
