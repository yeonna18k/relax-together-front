import {
  MyGathering,
  MyHostedGathering,
  PaginationParams,
  WriteReviewRequest,
} from '@/entities/mypage/model';

import { UpdateUserRequest, User } from '@/entities/mypage/model/user';
import ApiService from '@/shared/api/service/ApiService';
import { Response, Review } from '@/shared/model';

class MypageApiService extends ApiService {
  async getUser() {
    const response = await this.get<User>('/api/auths/user');
    return response;
  }

  async getMyJoinedGatherings({ page, size }: PaginationParams) {
    const response = await this.get<Response<MyGathering>>(
      `/api/gatherings/joined?page=${page}&size=${size}`,
    );
    return response;
  }

  async getMyWrittenReviews({ page, size }: PaginationParams) {
    const response = await this.get<Response<Review>>(
      `/api/reviews/me?page=${page}&size=${size}`,
    );
    return response;
  }

  async getMyHostedGatherings({ page, size }: PaginationParams) {
    const response = await this.get<Response<MyHostedGathering>>(
      `/api/gatherings/my-hosted?page=${page}&size=${size}`,
    );
    return response;
  }

  async updateUser(data: UpdateUserRequest) {
    const response = await this.put('/api/auths/user', data);
    return response;
  }

  async writeReview(data: WriteReviewRequest) {
    const response = await this.post(`api/reviews`, data);
    return response;
  }
}

export const mypageApiService = new MypageApiService();
