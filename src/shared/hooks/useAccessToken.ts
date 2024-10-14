'use client';

import { useEffect, useState } from 'react';

export default function useAccessToken() {
  const [accessToken, setAccessTokenState] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) setAccessTokenState(storedToken);
  }, []);

  const setAccessToken = (token: string) => {
    localStorage.setItem('accessToken', token);
    setAccessTokenState(token);
  };

  return { accessToken, setAccessToken };
}
