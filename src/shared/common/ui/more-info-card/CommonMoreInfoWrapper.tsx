import MoreInfoCard from '@/shared/common/ui/more-info-card';
import { Gathering } from '@/shared/model';
import { PropsWithChildren } from 'react';

type GatheringPropsWithChildren = PropsWithChildren & Pick<Gathering, 'id'>;
interface CommonMoreInfoWrapper extends GatheringPropsWithChildren {
  status: boolean;
}
export default function CommonMoreInfoWrapper({
  children,
  id,
  status,
}: CommonMoreInfoWrapper) {
  return (
    <div className="relative">
      <MoreInfoCard id={id} status={status} />
      {children}
    </div>
  );
}
