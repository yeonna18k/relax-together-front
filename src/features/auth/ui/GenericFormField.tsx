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
  isErrorMessage?: boolean;
}
export default function GenericFormField<TFormType extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  isErrorMessage = true,
}: FormFieldProps<TFormType>) {
  const isPasswordField =
    name === 'password' || name === 'passwordCheck' || name === 'newPassword';
  const error = form.formState.errors[name];

  const commonInputProps = {
    placeholder,
    className: cn(
      'text-gray h-10 text-sm font-medium text-gray-800 placeholder:text-gray-400',
      error ? 'border border-error hover:ring-error focus:ring-error' : '',
    ),
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="font-semibold text-gray-900">{label}</FormLabel>
          <FormControl className="mt-2 space-y-2 py-2">
            {isPasswordField ? (
              <InputPassword {...commonInputProps} {...field} />
            ) : (
              <Input {...commonInputProps} {...field} />
            )}
          </FormControl>
          {isErrorMessage && (
            <FormMessage className="mt-0 text-xs font-medium text-error" />
          )}
        </FormItem>
      )}
    />
  );
}
