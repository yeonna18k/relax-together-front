'use client';

import CommonButton from '@/shared/common/ui/common-button';
import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { CommonSize, ModalType, ModalVariant } from '@/shared/lib/constants';
import { copyToClipboard } from '@/shared/lib/utils';
import { useParams } from 'next/navigation';

export default function ShareBtn() {
  const params = useParams() as { id: string };

  const { modal, openModal, closeModal } = useModal();

  const handleShareBtnClick = () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/gatherings/${params.id}`;

    // 클립보드에 URL 복사
    copyToClipboard(textToCopy);

    openModal(ModalType.SHARE_CONFIRM);
  };

  const handleOnClick = () => {
    closeModal(ModalType.SHARE_CONFIRM);
  };

  return (
    <>
      <CommonButton
        variant="default"
        size={CommonSize.LARGE}
        className="h-11 w-1/2 sm:w-[115px]"
        onClick={handleShareBtnClick}
      >
        공유하기
      </CommonButton>
      {modal.includes(ModalType.SHARE_CONFIRM) && (
        <Modal
          variant={ModalVariant.NOTICE}
          size={CommonSize.SMALL}
          handleAction={handleOnClick}
        >
          <p className="text-center text-base font-medium text-[#111827]">
            링크가 복사되었습니다.
          </p>
        </Modal>
      )}
    </>
  );
}
