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
import { SigninFormType } from './SigninForm';

interface SigninFormFieldProps {
  form: UseFormReturn<SigninFormType>;
  name: keyof SigninFormType;
}

type SigninFormFieldPropsMap = {
  [K in keyof SigninFormType]: {
    label: string;
    placeholder: string;
    type?: string;
  };
};

const signinFormData: SigninFormFieldPropsMap = {
  email: {
    label: '아이디',
    placeholder: '이메일을 입력해주세요',
  },
  password: {
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
    type: 'password',
  },
};

export default function SigninFormField({ form, name }: SigninFormFieldProps) {
  const isPasswordField = name === 'password';
  const error = form.formState.errors[name];

  const commonInputProps = {
    placeholder: signinFormData[name].placeholder,
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
            {signinFormData[name].label}
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
