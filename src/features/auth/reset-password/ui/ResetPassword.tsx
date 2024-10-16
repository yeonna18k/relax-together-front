'use client';

import useResetPassword from '@/entities/auth/model/hooks/useResetPassword';
import GenericFormField from '@/features/auth/ui/GenericFormField';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui/button';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import ResetSuccessModal from '../../ui/ResetSuccessModal';

const formSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: '비밀번호가 8자 이상이 되도록 해 주세요.' }),
    passwordCheck: z
      .string()
      .min(8, { message: '비밀번호 확인을 위해 한 번 더 입력해주세요.' }),
    serverError: z.string().optional(),
  })
  .refine(data => data.newPassword === data.passwordCheck, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordCheck'],
  });

export type ResetPassword = z.infer<typeof formSchema>;

export default function ResetPasswordForm() {
  const form = useForm<ResetPassword>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      newPassword: '',
      passwordCheck: '',
    },
  });
  const { modal } = useModal();
  const { onSubmit } = useResetPassword(form);
  const formValid = form.formState.isValid;

  return (
    <div className="w-full rounded-xl bg-white px-4 py-8 text-xl md:px-16 md:py-8 lg:w-[510px]">
      <div className="mb-8 text-center text-xl font-semibold text-gray-800 md:text-2xl">
        비밀번호 변경
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <GenericFormField
            form={form}
            name="newPassword"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
          />
          <GenericFormField
            form={form}
            name="passwordCheck"
            label="비밀번호 확인"
            placeholder="비밀번호를 입력해주세요"
          />
          {form.formState.errors.serverError && (
            <p className="text-red-500">
              {form.formState.errors.serverError?.message}
            </p>
          )}

          <Button
            disabled={!formValid}
            variant={`${formValid ? 'enabled' : 'disabled'}`}
            size="full"
          >
            비밀번호 변경하기
          </Button>
        </form>
      </Form>
      {modal.includes('ResetSuccess') && <ResetSuccessModal />}
    </div>
  );
}
