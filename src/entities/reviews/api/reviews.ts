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
  sortOrder,
}: FetchParams & Partial<FilterParams>) => {
  const response = await reviewsApiService.getReviews({
    type,
    location,
    date,
    pageParam,
    size: LIMIT,
    sortBy,
    sortOrder,
  });
  return response.data;
};

export const fetchReviewScore = async ({ type }: Partial<FilterParams>) => {
  const response = await reviewsApiService.getReviewScore({ type });
  return response.data;
};
