'use client';

import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { copyToClipboard } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { useParams } from 'next/navigation';

export default function ShareBtn() {
  const params = useParams() as { id: string };

  const { modal, openModal, closeModal } = useModal();

  const handleShareBtnClick = () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/gatherings/${params.id}`;

    // 클립보드에 URL 복사
    copyToClipboard(textToCopy);

    openModal('ShareConfirmModal');
  };

  const handleOnClick = () => {
    closeModal('ShareConfirmModal');
  };

  return (
    <>
      <Button
        variant="default"
        size="lg"
        className="h-11 w-1/2 sm:w-[115px]"
        onClick={handleShareBtnClick}
        aria-label="공유하기"
      >
        공유하기
      </Button>
      {modal.includes('ShareConfirmModal') && (
        <Modal variant="notice" size="sm" handleAction={handleOnClick}>
          <p className="text-center text-base font-medium text-[#111827]">
            링크가 복사되었습니다.
          </p>
        </Modal>
      )}
    </>
  );
}
