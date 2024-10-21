'use client';

import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import useForgotPassword from '@/entities/auth/model/hooks/useForgotPassword';
import { useModal } from '@/shared/hooks/useModal';
import { ModalType } from '@/shared/lib/constants';
import CreateSuccessModal from '../../ui/ForgotSuccessModal';
import GenericFormField from '../../ui/GenericFormField';
import TogglePage from '../../ui/TogglePage';
import TokenExpiredModal from '../../ui/TokenExpiredModal';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요.' })
    .email('이메일 형식을 입력해주세요.'),
  serverError: z.string().optional(),
});

export type ForgotPassword = z.infer<typeof formSchema>;

export default function ForgotPasswordForm() {
  const form = useForm<ForgotPassword>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      email: '',
    },
  });
  const { modal } = useModal();
  const { onSubmit, isSubmitting, isSuccess } = useForgotPassword(form);
  const formValid = form.formState.isValid;

  return (
    <div className="mt-8 w-full rounded-xl bg-white px-4 py-8 md:mx-auto md:mt-[49px] md:w-[608px] md:px-[54px] xl:mx-0 xl:mt-0 xl:w-[510px] xl:px-16 xl:py-8">
      <div className="mb-8 text-center text-xs font-semibold text-gray-800 md:text-2xl">
        비밀번호 찾기
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <GenericFormField
            form={form}
            name="email"
            label="아이디"
            placeholder="이메일을 입력해주세요"
            isErrorMessage={false}
          />
          {form.formState.errors.serverError ? (
            <p className="text-sm text-error">
              {form.formState.errors.serverError.message}
            </p>
          ) : (
            <div className="h-5 w-full" />
          )}

          <div className="mt-1 flex flex-col gap-6">
            <Button
              disabled={!formValid || isSubmitting}
              variant={`${formValid && !isSubmitting ? 'enabled' : 'disabled'}`}
              size="full"
              className="md:h-11 md:text-base"
              aria-label="메일 보내기"
            >
              {isSubmitting ? '메일 보내는 중...' : '메일 보내기'}
            </Button>
            <TogglePage page="forgotPassword" />
          </div>
        </form>
      </Form>

      {isSuccess && <CreateSuccessModal />}
      {modal.includes(ModalType.TOKEN_EXPIRED) && <TokenExpiredModal />}
    </div>
  );
}
