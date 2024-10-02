import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import CommonBlurCard from '@/shared/common/ui/blur-card';
import { PropsWithChildren } from 'react';

export default function CommonBlurCardWrapper({
  children,
  id,
  status,
}: PropsWithChildren & Pick<MyGathering, 'id' | 'status'>) {
  return (
    <div className="relative">
      {status === 'CANCELLED' && <CommonBlurCard id={id} />}
      {children}
    </div>
  );
}
