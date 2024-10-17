'use client';
import { MyGathering } from '@/entities/mypage/model';
import useLeaveGatheringsById from '@/shared/hooks/useLeaveGatheringsById';
import { CommonSize } from '@/shared/lib/constants';
import { Button } from '@/shared/ui/button';

export default function CanceledGatheringButton({
  id,
}: Pick<MyGathering, 'id'>) {
  const { handleSubmit } = useLeaveGatheringsById(id);
  return (
    <Button
      variant="outline"
      size={CommonSize.SMALL}
      onClick={handleSubmit}
      className="z-20 hover:bg-green-500 hover:text-white"
    >
      예약 취소하기
    </Button>
  );
}
