import { FilterParams } from '@/entities/gatherings/model/params';
import { LIMIT } from '@/shared/lib/constants';
import { FetchParams } from '../../mypage/api/queries/common';
import { reviewsApiService } from './service/ReviewsApiService';
export const fetchReviews = async ({
  type,
  location,
  date,
  pageParam,
  sortBy,
}: FetchParams & Partial<FilterParams>) => {
  const response = await reviewsApiService.getReviews({
    type,
    location,
    date,
    pageParam,
    size: LIMIT,
    sortBy,
  });
  return response.data;
};
