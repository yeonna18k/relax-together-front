import { SigninFormType } from '@/features/auth/signin/ui/SigninForm';
import { UseFormReturn } from 'react-hook-form';
import { signinUser, signupUser } from '../model/user';
import { signinApiService, signupApiService } from './service/AuthApiService';

export function useSignup() {
  const signup = async (userData: signupUser) => {
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
  const signin = async (userData: signinUser) => {
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
