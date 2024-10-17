import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { CommonSize, ModalVariant } from '@/shared/lib/constants';
import { useRouter } from 'next/navigation';

export default function TokenExpiredModal() {
  const { closeModal } = useModal();
  const router = useRouter();

  const handleAction = () => {
    closeModal('forgotPassword');
  };

  return (
    <Modal
      variant={ModalVariant.NOTICE}
      size={CommonSize.SMALL}
      actionBtnName="확인"
      handleAction={handleAction}
    >
      <p className="w-full p-2 text-center text-base font-medium text-gray-900">
        토큰이 만료되었습니다.
        <br />
        비밀번호 찾기를 다시 시도해주세요.
      </p>
    </Modal>
  );
}
