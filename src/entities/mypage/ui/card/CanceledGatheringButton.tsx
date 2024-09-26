'use client';
import { MyGathering } from '@/entities/mypage/model';
import useLeaveGatheringsById from '@/shared/hooks/useLeaveGatheringsById';
import { Button } from '@/shared/ui/button';

export default function CanceledGatheringButton({
  id,
}: Pick<MyGathering, 'id'>) {
  const { handleSubmit } = useLeaveGatheringsById(id);
  return (
    <Button variant="outline" size="sm" onClick={handleSubmit}>
      예약 취소하기
    </Button>
  );
}
