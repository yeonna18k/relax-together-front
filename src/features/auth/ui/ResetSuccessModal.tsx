'use client';

import { Button } from '@/shared/ui/button';
import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';

interface ResetSuccessModalProps {
  onConfirm: () => void;
}

const ResetSuccessModal: React.FC<ResetSuccessModalProps> = ({ onConfirm }) => {
  return (
    <Dialog.Root open onOpenChange={() => {}}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white p-6 shadow-lg">
          <Dialog.Title className="mb-4 text-lg font-bold">
            비밀번호 변경 완료
          </Dialog.Title>
          <Dialog.Description className="mb-6">
            비밀번호가 성공적으로 변경되었습니다. 로그인 페이지로 이동합니다.
          </Dialog.Description>
          <Button onClick={onConfirm} variant="default">
            확인
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ResetSuccessModal;
