'use client';

import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { useRouter } from 'next/router';

export default function ResetSuccessModal() {
  const { closeModal } = useModal();
  const router = useRouter();

  const handleAction = () => {
    closeModal('createSuccess');
    router.push('/signin');
  };

  return (
    <Modal
      variant="notice"
      size="sm"
      actionBtnName="확인"
      handleAction={handleAction}
    >
      <p className="w-full p-2 text-center text-base font-medium text-gray-900">
        비밀번호를 성공적으로 변경했습니다!
      </p>
    </Modal>
  );
}
