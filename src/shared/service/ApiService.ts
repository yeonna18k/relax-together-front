import { UpdateUserRequest, User } from '@/entities/mypage/model/user';
import axios, { AxiosInstance } from 'axios';

type SignUpUser = {
  email: string;
  password: string;
  name: string;
  companyName: string;
};

type SigninUser = {
  email: string;
  password: string;
  // NOTE: token 타입 어디서 넣어야하는지 확인하기
  token: string;
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

  async signin({ email, password }: { email: string; password: string }) {
    const response = await this.instance.post<SigninUser>('/api/auths/login', {
      email,
      password,
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

  async updateUser(data: UpdateUserRequest) {
    const response = await this.instance.put('/api/auths/user', data);
    return response;
  }
}

export const apiService = new ApiService();
