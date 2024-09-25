import { cn } from '@/shared/lib/utils';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { useCheckEmail } from '../api';
import { SignupFormType } from './SignupForm';

interface SignupFormFieldProps {
  form: UseFormReturn<SignupFormType>;
}

export default function SignupEmailFormField({ form }: SignupFormFieldProps) {
  const error = form.formState.errors;
  useCheckEmail(form, error);

  const commonInputProps = {
    placeholder: '이메일을 입력해주세요',
    className: cn(
      'text-gray h-10 !w-full text-sm font-medium text-gray-800 placeholder:text-gray-400',
      error.email ? 'border border-error' : '',
    ),
  };

  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm font-semibold text-gray-900">
            아이디
          </FormLabel>
          <FormControl className="mt-2">
            <Input
              {...commonInputProps}
              {...field}
              onBlur={e => {
                if (!field.value) {
                  field.onBlur();
                } else {
                  e.preventDefault();
                }
              }}
              onChange={e => {
                field.onChange(e);
                form.setValue('email', e.target.value);
              }}
            />
          </FormControl>
          <FormMessage className="text-sm font-medium text-error" />
        </FormItem>
      )}
    />
  );
}
