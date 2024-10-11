import Modal from '@/shared/common/ui/modal';

export default function CreateSuccessModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  return (
    <Modal
      variant="notice"
      size="sm"
      actionBtnName="확인"
      handleAction={closeModal}
    >
      <p className="w-full p-2 text-center text-base font-medium text-gray-900">
        성공적으로 메일 보냈습니다!
      </p>
    </Modal>
  );
}
