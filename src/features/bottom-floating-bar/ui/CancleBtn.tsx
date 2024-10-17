import { gatheringsDetailApiService } from '@/entities/gatherings-detail/api/service/GatheringsDetailApiService';
import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { CommonSize, ModalType, ModalVariant } from '@/shared/lib/constants';
import { Button } from '@/shared/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function CancleBtn({ id }: { id: string }) {
  const { modal, openModal } = useModal();

  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate: cancelMutation } = useMutation({
    mutationFn: (id: string) => {
      return gatheringsDetailApiService.cancelGathering(id);
    },
    onSuccess: data => {
      console.log('성공적으로 취소했습니다:', data);
      queryClient.invalidateQueries({ queryKey: ['gathering'] });

      openModal(ModalType.CANCEL_CONFIRM);
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
      >
        취소하기
      </Button>
      {modal.includes(ModalType.CANCEL_CONFIRM) && (
        <Modal
          variant={ModalVariant.NOTICE}
          size={CommonSize.SMALL}
          handleAction={handleOnClick}
        >
          <p className="text-center text-base font-medium text-[#111827]">
            모임을 취소했습니다.
          </p>
        </Modal>
      )}
    </>
  );
}
