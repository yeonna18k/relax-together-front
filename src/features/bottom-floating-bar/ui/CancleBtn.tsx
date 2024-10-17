import { gatheringsDetailApiService } from '@/entities/gatherings-detail/api/service/GatheringsDetailApiService';
import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function CancleBtn({ id }: { id: string }) {
  const { modal, openModal, closeModal } = useModal();

  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate: cancelMutation } = useMutation({
    mutationFn: (id: string) => {
      return gatheringsDetailApiService.cancelGathering(id);
    },
    onSuccess: data => {
      console.log('성공적으로 취소했습니다:', data);
      queryClient.invalidateQueries({ queryKey: ['gathering'] });

      openModal('CancelConfirmModal');
    },
    onError: error => {
      console.error('취소하기 요청 실패:', error);
    },
  });

  const handleCancleBtnClick = () => {
    cancelMutation(id);
  };

  const handleOnClick = () => {
    router.push('/');
  };

  return (
    <>
      <Button
        variant="outline"
        size="lg"
        className="h-11 w-1/2 sm:w-[115px]"
        onClick={handleCancleBtnClick}
        aria-label="취소하기"
      >
        취소하기
      </Button>
      {modal.includes('CancelConfirmModal') && (
        <Modal variant="notice" size="sm" handleAction={handleOnClick}>
          <p className="text-center text-base font-medium text-[#111827]">
            모임을 취소했습니다.
          </p>
        </Modal>
      )}
    </>
  );
}
