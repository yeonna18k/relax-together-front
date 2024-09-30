import ApiService from '@/shared/api/service/ApiService';
import { signinUser, signupUser } from '../../model/user';

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
    const response = await this.post<signupUser>('/api/auths/signup', {
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

type SigninRequest = Omit<signinUser, 'token'>;
class SigninApiService extends ApiService {
  async signin({ email, password }: SigninRequest) {
    const response = await this.post<signinUser>('/api/auths/login', {
      email,
      password,
    });
    return response;
  }
}

export const signinApiService = new SigninApiService();
