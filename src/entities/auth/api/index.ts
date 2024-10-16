import { SigninFormType } from '@/features/auth/signin/ui/SigninForm';
import { commonApiService } from '@/shared/api/service/CommonApiService';
import { UseFormReturn } from 'react-hook-form';
import { SigninUser, SignupUser } from '../model/user';
import { signinApiService, signupApiService } from './service/AuthApiService';

export function useSignup() {
  const signup = async (userData: SignupUser) => {
    try {
      const response = await signupApiService.signup(userData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  return { signup };
}

export const fetchEmailAuth = async (email: string) => {
  try {
    const response = await signupApiService.EmailAuth(email);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export function useSignin(form: UseFormReturn<SigninFormType>) {
  const signin = async (userData: SigninUser) => {
    try {
      const response = await signinApiService.signin(userData);
      return response.data;
    } catch (e) {
      console.error(e);
      form.setError('email', { message: '' });
      form.setError('password', { message: '' });
      form.setValue('password', '');
      form.setError('loginError', {
        message:
          '아이디 또는 비밀번호가 잘못 되었습니다.^아이디와 비밀번호를 정확히 입력해 주세요.',
      });
    }
  };
  return { signin };
}

export function useSigninUserData() {
  const signinUserData = async () => {
    try {
      const response = await commonApiService.getUserInfo();
      return response;
    } catch (e) {
      console.error(e);
    }
  };
  return { signinUserData };
}

export function useSignout() {
  const signout = async () => {
    try {
      const response = await commonApiService.signout();
      return response;
    } catch (e) {
      console.error(e);
    }
  };
  return { signout };
}
