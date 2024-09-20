'use client';

import useUserInfo from '@/entities/mypage/api';
import useMswApiMock from '@/shared/hooks/useMswApiMock';

export default function Mypage() {
  //NOTE: msw api mock 및 useQuery 사용 예시
  useMswApiMock();
  const { user, isLoading } = useUserInfo();
  console.log('🚀 ~ Mypage ~ { user, isLoading }:', { user, isLoading });
  return <div>마이페이지</div>;
}
