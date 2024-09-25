'use client';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import { useReviewStore } from '@/entities/mypage/model/store/useReviewStore';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui/button';

export default function WriteReviewButton({ id }: Pick<MyGathering, 'id'>) {
  const { setOpen } = useModal();
  const { setTargetGatheringId } = useReviewStore();
  const handleClick = () => {
    setOpen(true);
    setTargetGatheringId(id);
  };
  return (
    <Button size="sm" onClick={handleClick}>
      리뷰 작성하기
    </Button>
  );
}
