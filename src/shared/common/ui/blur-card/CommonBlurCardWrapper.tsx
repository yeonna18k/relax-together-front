import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import CommonBlurCard from '@/shared/common/ui/blur-card';

interface CommonBlurCardWrapperProps {
  children: React.ReactNode;
}
export default function CommonBlurCardWrapper({
  children,
  id,
  status,
}: CommonBlurCardWrapperProps & Pick<MyGathering, 'id' | 'status'>) {
  return (
    <div className="relative">
      {status === 'CANCELLED' && <CommonBlurCard id={id} />}
      {children}
    </div>
  );
}
