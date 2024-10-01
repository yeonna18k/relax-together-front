import { Gathering } from '@/shared/model';
import GatheringCardContentSection from './GatheringCardContentSection';
import GatheringCardImageSection from './GatheringCardImageSection';

export interface GatheringCardProps extends Gathering {
  message: string;
}

export default function GatheringCard(props: GatheringCardProps) {
  const { imageUrl, message, ...rest } = props;
  return (
    <div className="shadow-l flex w-full flex-col gap-3 overflow-hidden rounded-xl border-2 border-gray-100 xs:gap-0 sm:flex-row xl:w-[996px]">
      <GatheringCardImageSection image={imageUrl} message={message} />
      <GatheringCardContentSection {...rest} />
    </div>
  );
}
