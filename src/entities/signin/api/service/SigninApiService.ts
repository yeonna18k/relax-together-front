import { User } from '@/entities/signin/model/user';
import ApiService from '@/shared/api/service/ApiService';

type SigninRequest = Omit<User, 'token'>;
class SigninApiService extends ApiService {
  async signin({ email, password }: SigninRequest) {
    const response = await this.post<User>('/api/auths/login', {
      email,
      password,
    });
    return response;
  }
}

export const signinApiService = new SigninApiService();
