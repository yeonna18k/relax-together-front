import { FilterParams } from '@/entities/gatherings/model/params';
import { FetchParams } from '@/entities/mypage/api/queries';
import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL, LIMIT } from '@/shared/lib/constants';
import { Response, Review } from '@/shared/model';

class ReviewsApiService extends ApiService {
  async getReviews({
    pageParam,
    type,
    location,
    date,
    size = LIMIT,
    sortBy,
  }: FetchParams & Partial<FilterParams>) {
    const response = await this.get<Response<Review>>(
      `${BASE_URL}/api/reviews?type=${type}&location=${location ?? ''}&date=${date ?? ''}&page=${pageParam}&size=${size}&sortBy=${sortBy}`,
    );
    return response;
  }
}

export const reviewsApiService = new ReviewsApiService();
