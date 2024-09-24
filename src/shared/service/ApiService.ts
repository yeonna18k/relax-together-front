import { PaginationParams } from '@/entities/mypage/model/common';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import { User } from '@/entities/mypage/model/user';
import { Response } from '@/shared/model/response';
import axios, { AxiosInstance } from 'axios';

type SignUpUser = {
  email: string;
  password: string;
  name: string;
  companyName: string;
};

export default class ApiService {
  private instance: AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  private accessToken = '';

  setAccessToken(accessToken: string) {
    if (accessToken === this.accessToken) {
      return;
    }

    const authorization = accessToken ? `Bearer ${accessToken}` : undefined;

    this.instance.defaults.headers.common['Authorization'] = authorization;

    this.accessToken = accessToken;
  }

  //NOTE: api 사용 예제
  async signup({
    email,
    password,
    name,
    companyName,
  }: {
    email: string;
    password: string;
    name: string;
    companyName: string;
  }) {
    const response = await this.instance.post<SignUpUser>('/api/auths/signup', {
      email,
      password,
      name,
      companyName,
    });
    return response;
  }
  async checkEmail(email: string) {
    const response = await this.instance.post('/api/auths/check-email', {
      email,
    });
    return response;
  }
  // async logout(): Promise<AxiosResponse<null, any>> {
  //   const response = await this.instance.post('/api/auth/logout');
  //   return response;
  // }

  async getUser() {
    const response = await this.instance.get<User>('/api/auths/user');
    return response;
  }

  async getMyJoinedGatherings({ page, size }: PaginationParams) {
    const response = await this.instance.get<Response<MyGathering>>(
      `/api/gatherings/joined?page=${page}&size=${size}`,
    );
    return response;
  }
}

export const apiService = new ApiService();
