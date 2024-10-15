'use client';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import { useReviewStore } from '@/entities/mypage/model/store/useReviewStore';
import { useModal } from '@/shared/hooks/useModal';
import { Modal } from '@/shared/lib/constants';
import { Button } from '@/shared/ui/button';

export default function WriteReviewButton({
  id,
  reviewed,
}: Pick<MyGathering, 'id' | 'reviewed'>) {
  const { openModal } = useModal();
  const { setTargetGatheringId } = useReviewStore();
  const handleClick = () => {
    openModal(Modal.WRITE_REVIEW);
    setTargetGatheringId(id);
  };
  return (
    <Button
      size="sm"
      onClick={handleClick}
      disabled={reviewed}
      className="z-20"
    >
      {reviewed ? '리뷰 작성완료' : '리뷰 작성하기'}
    </Button>
  );
}
