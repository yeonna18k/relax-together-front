import { User } from '@/entities/signup/model/user';
import ApiService from '@/shared/api/service/ApiService';

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
    const response = await this.post<User>('/api/auths/signup', {
      email,
      password,
      name,
      companyName,
    });
    return response;
  }
  async checkEmail(email: string) {
    const response = await this.post('/api/auths/check-email', {
      email,
    });
    return response;
  }
}

export const signupApiService = new SignupApiService();
