import {
  MyGathering,
  MyHostedGathering,
  PaginationParams,
} from '@/entities/mypage/model';

import { UpdateUserRequest, User } from '@/entities/mypage/model/user';
import { Response, Review } from '@/shared/model';
import ApiService from '@/shared/service/ApiService';

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
}

export const mypageApiService = new MypageApiService();
