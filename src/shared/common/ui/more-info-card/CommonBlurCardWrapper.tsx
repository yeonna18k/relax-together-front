import MoreInfoCard from '@/shared/common/ui/more-info-card';
import { Gathering } from '@/shared/model';
import { PropsWithChildren } from 'react';

export default function CommonMoreInfoWrapper({
  children,
  id,
}: PropsWithChildren & Pick<Gathering, 'id'>) {
  return (
    <div className="relative">
      <MoreInfoCard id={id} />
      {children}
    </div>
  );
}
