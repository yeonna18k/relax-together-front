import MoreInfoCard from '@/shared/common/ui/more-info-card';
import { Gathering } from '@/shared/model';
import { PropsWithChildren } from 'react';
type GatheringPropsWithChildren = PropsWithChildren & Pick<Gathering, 'id'>;
interface CommonMoreInfoWrapperProps extends GatheringPropsWithChildren {
  className?: string;
}
export default function CommonMoreInfoWrapper({
  children,
  id,
  className,
}: CommonMoreInfoWrapperProps) {
  return (
    <div className="relative">
      <MoreInfoCard id={id} className={className} />
      {children}
    </div>
  );
}
