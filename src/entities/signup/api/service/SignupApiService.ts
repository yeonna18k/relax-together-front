import { User } from '@/entities/signup/model/user';
import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';

class SignupApiService extends ApiService {
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
    const response = await this.post<User>(`${BASE_URL}/api/auths/signup`, {
      email,
      password,
      name,
      companyName,
    });
    return response;
  }
  async checkEmail(email: string) {
    const response = await this.post(`${BASE_URL}/api/auths/check-email`, {
      email,
    });
    return response;
  }
}

export const signupApiService = new SignupApiService();
