import { cn } from '@/shared/lib/utils';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input, InputPassword } from '@/shared/ui/input';
import { FieldValues, Path, UseFormReturn } from 'react-hook-form';

interface FormFieldProps<TFormType extends FieldValues> {
  form: UseFormReturn<TFormType>;
  name: Path<TFormType>;
  label: string;
  placeholder: string;
}
export default function GenericFormField<TFormType extends FieldValues>({
  form,
  name,
  label,
  placeholder,
}: FormFieldProps<TFormType>) {
  const isPasswordField = name === 'password' || name === 'passwordCheck';
  const error = form.formState.errors[name];

  const commonInputProps = {
    placeholder,
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
            {label}
          </FormLabel>
          <FormControl className="mt-2">
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
