import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
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
  username: {
    label: '이름',
    placeholder: '이름을 입력해주세요',
  },
  userid: {
    label: '아이디',
    placeholder: '이메일을 입력해주세요',
  },
  company: {
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
            <Input
              type={signupFormData[name].type ?? 'input'}
              placeholder={signupFormData[name].placeholder}
              className="text-gray h-10 w-full text-sm font-medium text-gray-800 placeholder:text-gray-400"
              {...field}
            />
          </FormControl>
          <FormDescription>
            {/* This is your public display name. */}
          </FormDescription>
          <FormMessage className="text-sm font-medium text-[#DC2626]" />
        </FormItem>
      )}
    />
  );
}
