'use client';

import { ACCESS_TOKEN_KEY } from '@/shared/lib/constants';
import { useEffect, useState } from 'react';

export default function useAccessToken() {
  const [accessToken, setAccessTokenState] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (storedToken) setAccessTokenState(storedToken);
  }, []);

  const setAccessToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    setAccessTokenState(token);
  };

  return { accessToken, setAccessToken };
}
