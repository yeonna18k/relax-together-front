import { RequestResetPassword } from '@/entities/auth/model/reset-password';
import ApiService from '@/shared/api/service/ApiService';
import { BASE_URL } from '@/shared/lib/constants';
import { SigninUser, SignupUser } from '../../model/user';

class SignupApiService extends ApiService {
  constructor() {
    super();
  }
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
    const response = await this.post<SignupUser>(
      `${BASE_URL}/api/auths/signup`,
      {
        email,
        password,
        name,
        companyName,
      },
    );
    return response;
  }
  async VerifyUniqueEmail(email: string) {
    const response = await this.post(`${BASE_URL}/api/auths/check-email`, {
      email,
    });
    return response;
  }
  async EmailAuth(email: string) {
    const response = await this.post(`${BASE_URL}/api/email/signup`, {
      email,
    });
    return response;
  }
  async VerifyEmailAuthCode(code: string) {
    const response = await this.post(`${BASE_URL}/api/verify-code`, {
      code,
    });
    return response;
  }
}

export const signupApiService = new SignupApiService();

export type Tokens = { accessToken: string };
class SigninApiService extends ApiService {
  constructor() {
    super();
  }
  async signin({ email, password }: SigninUser) {
    const response = await this.post<Tokens>(`${BASE_URL}/api/auths/login`, {
      email,
      password,
    });
    return response;
  }
}

export const signinApiService = new SigninApiService();

export class ForgotPasswordApiService extends ApiService {
  constructor() {
    super();
  }

  // 비밀번호 찾기 이메일 전송 API
  async sendForgotPasswordEmail(email: string) {
    const response = await this.post(`${BASE_URL}/api/email/password-change`, {
      email,
    });
    return response;
  }

  // 비밀번호 재설정 API
  async resetPassword({
    email,
    newPassword,
    passwordCheck,
  }: RequestResetPassword) {
    const response = await this.post(`${BASE_URL}/api/auths/change-password`, {
      email,
      newPassword,
      passwordCheck,
    });
    return response;
  }
}

export const forgotPasswordApiService = new ForgotPasswordApiService();
