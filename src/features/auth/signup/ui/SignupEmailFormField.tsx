import { fetchEmailAuth } from '@/entities/auth/api';
import { useVerifyEmailAuthCode } from '@/entities/auth/model/hooks/useVerifyEmailAuthCode';
import { useModal } from '@/shared/hooks/useModal';
import { ModalType } from '@/shared/lib/constants';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { UseFormReturn } from 'react-hook-form';
import { useVerifyUniqueEmail } from '../../../../entities/auth/model/hooks/useVerifyUniqueEmail';
import EmailAuthModal from './EmailAuthModal';
import { SignupFormType } from './SignupForm';

interface SignupFormFieldProps {
  form: UseFormReturn<SignupFormType>;
  emailAuth: boolean;
  setEmailAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignupEmailFormField({
  form,
  emailAuth,
  setEmailAuth,
}: SignupFormFieldProps) {
  const error = form.formState.errors;
  const { modal, openModal } = useModal();
  const { handleVerifyCode } = useVerifyEmailAuthCode(form, setEmailAuth);
  useVerifyUniqueEmail(form, error);

  const commonInputProps = {
    placeholder: '이메일을 입력해주세요',
    className: cn(
      'text-gray h-10 !w-full text-sm font-medium text-gray-800 placeholder:text-gray-400',
      error.email
        ? 'border border-error hover:ring-error focus:ring-error'
        : '',
    ),
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchEmailAuth(form.control._formValues.email);
    openModal(ModalType.EMAIL_AUTH);
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
          <div className="mt-2 flex gap-2">
            <FormControl>
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
                disabled={emailAuth}
              />
            </FormControl>
            <Button
              variant={emailAuth || error.email ? 'disabled' : 'outline'}
              size="default"
              className={`h-10 w-[97px] px-6 ${emailAuth && 'bg-green-500'}`}
              disabled={emailAuth || error.email !== undefined}
              onClick={handleButtonClick}
            >
              {emailAuth ? '인증완료' : '인증하기'}
            </Button>
            {modal.includes(ModalType.EMAIL_AUTH) && (
              <EmailAuthModal handleVerifyCode={handleVerifyCode} />
            )}
          </div>
          <FormMessage className="text-sm font-medium text-error" />
        </FormItem>
      )}
    />
  );
}
