import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { CommonSize, ModalType, ModalVariant } from '@/shared/lib/constants';

export default function CreateSuccessModal() {
  const { closeModal } = useModal();
  return (
    <Modal
      variant={ModalVariant.NOTICE}
      size={CommonSize.SMALL}
      actionBtnName="확인"
      handleAction={() => closeModal(ModalType.CREATE_SUCCESS)}
    >
      <p className="w-full p-2 text-center text-base font-medium text-gray-900">
        새로운 모임이 등록되었습니다.
      </p>
    </Modal>
  );
}
