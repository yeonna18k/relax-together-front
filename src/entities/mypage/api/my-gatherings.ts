import { FetchParams } from '@/entities/mypage/api/queries/common';
import { mypageApiService } from '@/entities/mypage/api/service/MypageApiService';
import { LIMIT } from '@/shared/lib/constants';

export const fetchJoinedGatherings = async ({ pageParam }: FetchParams) => {
  //TODO: 마이페이지 접근 시 나의 모임의 hostUser와 로그인 사용자와 id를 비교해서 hostUser와 같은 모임은 안보이도록 처리
  const response = await mypageApiService.getMyJoinedGatherings({
    page: pageParam,
    size: LIMIT,
  });
  return response.data;
};
