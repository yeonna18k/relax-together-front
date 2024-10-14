import { FilterParams } from '@/entities/gatherings/model/params';
import { FetchParams } from '@/entities/mypage/api/queries';
import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL, LIMIT } from '@/shared/lib/constants';
import { Response, Review, ReviewScore } from '@/shared/model';

class ReviewsApiService extends ApiService {
  constructor() {
    super();
  }
  async getReviews({
    pageParam,
    type,
    location,
    date,
    size = LIMIT,
    sortBy,
    sortOrder,
  }: FetchParams & Partial<FilterParams>) {
    const response = await this.get<Response<Review>>(
      `${BASE_URL}/api/reviews?type=${type}${location ? `&location=${location}` : ''}${date ? `&date=${date}` : ''}&page=${pageParam}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    );
    return response;
  }

  async getReviewScore({ type }: Partial<FilterParams>) {
    const response = await this.get<ReviewScore>(
      `${BASE_URL}/api/reviews/scores?type=${type}`,
    );
    return response;
  }
}

export const reviewsApiService = new ReviewsApiService();
