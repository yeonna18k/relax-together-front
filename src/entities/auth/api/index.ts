import { SigninFormType } from '@/features/auth/signin/ui/SigninForm';
import { UseFormReturn } from 'react-hook-form';
import { SigninUser, SignupUser } from '../model/user';
import {
  signinApiService,
  signupApiService,
  Tokens,
} from './service/AuthApiService';

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
      form.setError('email', {});
      form.setError('password', {});
      form.setValue('password', '');
    }
  };
  return { signin };
}

export function useSigninUserData() {
  const signinUserData = async () => {
    try {
      const response = await signinApiService.signinUserData();
      return response;
    } catch (e) {
      console.error(e);
    }
  };
  return { signinUserData };
}

export function useSignout(accessToken: Tokens) {
  const signout = async () => {
    try {
      const response = await signinApiService.signout(accessToken);
      return response;
    } catch (e) {
      console.error(e);
    }
  };
  return { signout };
}
