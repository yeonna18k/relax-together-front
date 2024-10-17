'use client';

import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { CommonSize, ModalVariant } from '@/shared/lib/constants';
import { useRouter } from 'next/navigation';

export default function ResetSuccessModal() {
  const { closeModal } = useModal();
  const router = useRouter();

  const handleAction = () => {
    closeModal('createSuccess');
    router.push('/signin');
  };

  return (
    <Modal
      variant={ModalVariant.NOTICE}
      size={CommonSize.SMALL}
      actionBtnName="로그인 하러가기"
      handleAction={handleAction}
    >
      <p className="p-2 text-center text-base font-medium text-gray-900">
        비밀번호를 성공적으로 변경했습니다!
      </p>
    </Modal>
  );
}
