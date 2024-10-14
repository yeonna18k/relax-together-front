import { useEmailAuthentication } from '@/entities/auth/model/hooks/useEmailAuthentication';
import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
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
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/shared/ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useVerifyUniqueEmail } from '../../../../entities/auth/model/hooks/useVerifyUniqueEmail';
import { SignupFormType } from './SignupForm';

interface SignupFormFieldProps {
  form: UseFormReturn<SignupFormType>;
  emailAuthentication: boolean;
  setEmailAuthentication: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SignupEmailFormField({
  form,
  emailAuthentication,
  setEmailAuthentication,
}: SignupFormFieldProps) {
  const [otp, setOtp] = useState('');
  const error = form.formState.errors;
  const { modal, openModal } = useModal();
  const { handleEmailAuthentication } = useEmailAuthentication();
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
                disabled={emailAuthentication}
              />
            </FormControl>
            <Button
              variant={
                error.email || emailAuthentication ? 'disabled' : 'outline'
              }
              size="default"
              className="h-10 w-[97px] px-6"
              disabled={emailAuthentication || error.email !== undefined}
              onClick={e => {
                e.preventDefault();
                openModal('EmailAuthenticationModal');
              }}
            >
              {emailAuthentication ? '인증완료' : '인증하기'}
            </Button>
            {modal.includes('EmailAuthenticationModal') && (
              <Modal
                variant="single"
                size="sm"
                title="이메일 인증"
                disabled={otp.length < 6}
                handleAction={handleEmailAuthentication}
              >
                <div className="flex flex-col items-center gap-6">
                  <p className="text-gray-800">
                    이메일로 전송된 인증번호 6자리를 입력해주세요
                  </p>
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    onChange={e => setOtp(e)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
              </Modal>
            )}
          </div>
          <FormMessage className="text-sm font-medium text-error" />
        </FormItem>
      )}
    />
  );
}
