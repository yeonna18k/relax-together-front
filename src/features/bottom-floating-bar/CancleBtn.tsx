import { gatheringsDetailApiService } from '@/entities/gatherings-detail/api/service/GatheringsDetailApiService';
import CommonButton from '@/shared/common/ui/common-button';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function CancleBtn({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const { mutate: cancelMutation } = useMutation({
    mutationFn: (id: string) => {
      return gatheringsDetailApiService.cancelGathering(id);
    },
    onSuccess: data => {
      console.log('성공적으로 취소했습니다:', data);
      queryClient.invalidateQueries({ queryKey: ['gathering'] });
    },
    onError: error => {
      console.error('취소하기 요청 실패:', error);
    },
  });

  const handleCancleBtnClick = () => {
    cancelMutation(id);
  };

  return (
    <CommonButton
      variant="outline"
      size="lg"
      className="h-11 w-1/2 sm:w-[115px]"
      onClick={handleCancleBtnClick}
    >
      취소하기
    </CommonButton>
  );
}
