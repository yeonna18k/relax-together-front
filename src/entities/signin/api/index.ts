import { UseFormReturn } from 'react-hook-form';
import { User } from '../model/user';
import { SigninFormType } from '../ui/SigninForm';
import { signinApiService } from './service/SigninApiService';

export function useSignin(form: UseFormReturn<SigninFormType>) {
  const signin = async (userData: User) => {
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
