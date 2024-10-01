import {
  MyGathering,
  MyHostedGathering,
  PaginationParams,
  WriteReviewRequest,
} from '@/entities/mypage/model';

import { UpdateUserRequest, User } from '@/entities/mypage/model/user';
import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import { Response, Review } from '@/shared/model';

class MypageApiService extends ApiService {
  async getUser() {
    const response = await this.get<User>('/api/auths/me');
    return response;
  }

  async getMyJoinedGatherings({ page, size }: PaginationParams) {
    const response = await this.get<Response<MyGathering>>(
      `${BASE_URL}/api/gatherings/joined?page=${page}&size=${size}`,
    );
    return response;
  }

  async getMyWrittenReviews({ page, size }: PaginationParams) {
    const response = await this.get<Response<Review>>(
      `${BASE_URL}/api/reviews/me?page=${page}&size=${size}`,
    );
    return response;
  }

  async getMyHostedGatherings({ page, size }: PaginationParams) {
    const response = await this.get<Response<MyHostedGathering>>(
      `${BASE_URL}/api/gatherings/my-hosted?page=${page}&size=${size}`,
    );
    return response;
  }

  async updateUser(data: UpdateUserRequest) {
    const response = await this.put(`${BASE_URL}/api/auths/me`, data);
    return response;
  }

  async writeReview(data: WriteReviewRequest) {
    const response = await this.post(`${BASE_URL}/api/reviews`, data);
    return response;
  }
}

export const mypageApiService = new MypageApiService();
