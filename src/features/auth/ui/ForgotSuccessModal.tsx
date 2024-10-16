import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';

export default function CreateSuccessModal() {
  const { closeModal } = useModal();
  return (
    <Modal
      variant="notice"
      size="sm"
      actionBtnName="확인"
      handleAction={() => closeModal('forgotPassword')}
    >
      <p className="w-full p-2 text-center text-base font-medium text-gray-900">
        성공적으로 메일 보냈습니다!
      </p>
    </Modal>
  );
}
