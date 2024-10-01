import { User } from '@/entities/signin/model/user';
import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';

type SigninRequest = Omit<User, 'token'>;
class SigninApiService extends ApiService {
  async signin({ email, password }: SigninRequest) {
    const response = await this.post<User>(`${BASE_URL}/api/auths/login`, {
      email,
      password,
    });
    return response;
  }
}

export const signinApiService = new SigninApiService();
