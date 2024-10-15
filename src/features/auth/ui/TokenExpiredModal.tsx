import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { useRouter } from 'next/navigation';

export default function TokenExpiredModal() {
  const { closeModal } = useModal();
  const router = useRouter();

  const handleAction = () => {
    closeModal('forgotPassword');
    router.push('/forgot-password'); // 비밀번호 찾기 페이지로 리디렉션
  };

  return (
    <Modal
      variant="notice"
      size="sm"
      actionBtnName="확인"
      handleAction={handleAction}
    >
      <p className="w-full p-2 text-center text-base font-medium text-gray-900">
        토큰이 만료되었습니다. 비밀번호 찾기 페이지로 이동합니다.
      </p>
    </Modal>
  );
}
