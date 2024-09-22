import { User } from '@/entities/mypage/model/user';
import axios, { AxiosInstance } from 'axios';

type SignUpUser = {
  email: string;
  password: string;
  name: string;
  companyName: string;
};

export default class ApiService {
  private instance: AxiosInstance = axios.create({
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
    const response = await this.instance.post<SignUpUser>('/api/auth/signup', {
      email,
      password,
      name,
      companyName,
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
}

export const apiService = new ApiService();
