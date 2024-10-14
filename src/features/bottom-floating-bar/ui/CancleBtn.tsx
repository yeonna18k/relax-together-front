import { gatheringsDetailApiService } from '@/entities/gatherings-detail/api/service/GatheringsDetailApiService';
import { GatheringsInfoTypes } from '@/entities/gatherings-detail/model/information';
import { getTimeUntilDeadline } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

interface CancleBtnProps {
  id: string;
  gatheringsInfo: GatheringsInfoTypes;
}

export default function CancleBtn({ id, gatheringsInfo }: CancleBtnProps) {
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate: cancelMutation } = useMutation({
    mutationFn: (id: string) => {
      return gatheringsDetailApiService.cancelGathering(id);
    },
    onSuccess: data => {
      console.log('성공적으로 취소했습니다:', data);
      queryClient.invalidateQueries({ queryKey: ['gathering'] });

      alert('모임을 취소했습니다.');
      router.push('/');
    },
    onError: error => {
      console.error('취소하기 요청 실패:', error);
    },
  });

  const handleCancleBtnClick = () => {
    cancelMutation(id);
  };

  const isClosed =
    getTimeUntilDeadline(new Date(gatheringsInfo.registrationEnd)) ===
    '마감되었습니다';

  return (
    <Button
      disabled={isClosed}
      variant={isClosed ? 'disabled' : 'outline'}
      size="lg"
      className="h-11 w-1/2 sm:w-[115px]"
      onClick={handleCancleBtnClick}
    >
      취소하기
    </Button>
  );
}
