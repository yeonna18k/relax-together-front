import axios from 'axios';
import { useEffect } from 'react';
import { FieldErrors, UseFormReturn } from 'react-hook-form';
import { useDebounceValue } from 'usehooks-ts';
import { signupApiService } from '../../api/service/SignupApiService';
import { SignupFormType } from '../../ui/SignupForm';

export async function useCheckEmail(
  form: UseFormReturn<SignupFormType>,
  error: FieldErrors,
) {
  const [debouncedValue, setValue] = useDebounceValue(
    form.getValues('email'),
    500,
  );

  const handleCheckEmail = async () => {
    try {
      const response = await signupApiService.checkEmail(debouncedValue);
      return response.data;
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        if (e.response?.status === 409) {
          form.setError('email', {
            message: '중복된 이메일입니다.',
          });
        } else {
          form.setError('email', {
            message: '이메일 확인 중 오류가 발생했습니다.',
          });
        }
      }
    }
  };

  useEffect(() => {
    if (debouncedValue.length > 0 && error.email === undefined) {
      handleCheckEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    form.watch(value => {
      if (value.email) {
        setValue(value.email);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue]);
}
