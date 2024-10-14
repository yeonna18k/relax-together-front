import { FetchParams } from '@/entities/mypage/api/queries/common';
import { mypageApiService } from '@/entities/mypage/api/service/MypageApiService';
import { MyGathering } from '@/entities/mypage/model';
import { LIMIT } from '@/shared/lib/constants';
import { Response } from '@/shared/model';
import { AxiosResponse } from 'axios';

export const fetchMyPendingReviews = async ({ pageParam }: FetchParams) => {
  const response = await mypageApiService.getMyJoinedGatherings({
    page: pageParam,
    size: LIMIT,
  });

  const content = response.data.content
    .filter(gathering => gathering.completed)
    .filter(gathering => !gathering.reviewed);

  const modifiedResponse: AxiosResponse<Response<MyGathering>> = {
    ...response,
    data: {
      ...response.data,
      content,
      totalElements: content.length,
    },
  };

  return modifiedResponse.data;
};
