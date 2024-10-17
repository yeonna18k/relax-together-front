import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { ModalType } from '@/shared/lib/constants';

export default function CreateSuccessModal() {
  const { closeModal } = useModal();
  return (
    <Modal
      variant="notice"
      size="sm"
      actionBtnName="확인"
      handleAction={() => closeModal(ModalType.CREATE_SUCCESS)}
    >
      <p className="w-full p-2 text-center text-base font-medium text-gray-900">
        새로운 모임이 등록되었습니다.
      </p>
    </Modal>
  );
}
