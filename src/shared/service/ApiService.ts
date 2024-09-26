import {
  GatheringsInfoTypes,
  ParticipantListTypes,
} from '@/entities/gatherings-detail/model/information';
import { UpdateUserRequest, User } from '@/entities/mypage/model/user';
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

  async updateUser(data: UpdateUserRequest) {
    const response = await this.instance.put('/api/auths/user', data);
    return response;
  }

  async getGatheringsInfo(id: string) {
    const response = await this.instance.get<GatheringsInfoTypes>(
      `http://localhost:3000/api/gatherings/${id}`,
    );
    return response;
  }

  async getParticipantList(id: string) {
    const response = await this.instance.get<ParticipantListTypes[]>(
      `http://localhost:3000/api/gatherings/${id}/participants`,
    );
    return response;
  }
}

export const apiService = new ApiService();
