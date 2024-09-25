import { FetchParams } from '@/entities/mypage/api/queries/common';
import { mypageApiService } from '@/entities/mypage/api/service/MypageApiService';
import { LIMIT } from '@/shared/lib/constants';

export const fetchWrittenReviews = async ({ pageParam }: FetchParams) => {
  const response = await mypageApiService.getMyWrittenReviews({
    page: pageParam,
    size: LIMIT,
  });
  return response.data;
};
