import { cn } from '@/shared/lib/utils';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input, InputPassword } from '@/shared/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { SignupFormType } from './SignupForm';

interface SignupFormFieldProps {
  form: UseFormReturn<SignupFormType>;
  name: keyof SignupFormType;
}

type SignupFormFieldPropsMap = {
  [K in keyof SignupFormType]: {
    label: string;
    placeholder: string;
    type?: string;
  };
};

const signupFormData: SignupFormFieldPropsMap = {
  name: {
    label: '이름',
    placeholder: '이름을 입력해주세요',
  },
  email: {
    label: '아이디',
    placeholder: '이메일을 입력해주세요',
  },
  companyName: {
    label: '회사명',
    placeholder: '회사명을 입력해주세요',
  },
  password: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
    type: 'password',
  },
  passwordCheck: {
    label: '비밀번호 확인',
    placeholder: '비밀번호를 입력해주세요',
    type: 'password',
  },
};

export default function SignupFormField({ form, name }: SignupFormFieldProps) {
  const isPasswordField = name === 'password' || name === 'passwordCheck';
  const error = form.formState.errors[name];

  // useCheckEmail(form);

  const commonInputProps = {
    placeholder: signupFormData[name].placeholder,
    className: cn(
      'text-gray h-10 !w-full text-sm font-medium text-gray-800 placeholder:text-gray-400',
      error ? 'border border-error' : '',
    ),
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-semibold text-gray-900">
            {signupFormData[name].label}
          </FormLabel>
          <FormControl className="mb-1.5 mt-2">
            {isPasswordField ? (
              <InputPassword {...commonInputProps} {...field} />
            ) : (
              <Input {...commonInputProps} {...field} />
            )}
          </FormControl>
          <FormMessage className="text-sm font-medium text-error" />
        </FormItem>
      )}
    />
  );
}
