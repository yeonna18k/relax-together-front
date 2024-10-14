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
