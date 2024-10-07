import {
  MyGathering,
  MyHostedGathering,
  PaginationParams,
  WriteReviewRequest,
} from '@/entities/mypage/model';

import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import { Response, Review, UpdateUserRequest } from '@/shared/model';
import axios from 'axios';

class MypageApiService extends ApiService {
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
    try {
      const response = await this.put(`${BASE_URL}/api/auths/me`, data);
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { status, data } = error.response;
        throw new Error(
          `status: ${status}, error: ${data.error}, message: ${data.message}`,
        );
      }
      throw error;
    }
  }

  async writeReview(data: WriteReviewRequest) {
    const response = await this.post(`${BASE_URL}/api/reviews`, data);
    return response;
  }
}

export const mypageApiService = new MypageApiService();
