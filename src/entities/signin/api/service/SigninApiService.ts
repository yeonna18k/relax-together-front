import { User } from '@/entities/signin/model/user';
import ApiService from '@/shared/api/service/ApiService';

class SigninApiService extends ApiService {
  async signin({ email, password }: { email: string; password: string }) {
    const response = await this.post<User>('/api/auths/login', {
      email,
      password,
    });
    return response;
  }
}

export const signinApiService = new SigninApiService();
