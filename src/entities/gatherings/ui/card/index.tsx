import { MyGathering } from '@/entities/mypage/model';
import GatheringCardContentSection from './GatheringCardContentSection';
import GatheringCardImageSection from './GatheringCardImageSection';

export type PickMyGathering = Pick<MyGathering, 'type' | 'location'>;
interface GatheringCardProps extends PickMyGathering {
  image: string;
  message: string;
  date: string;
  time: string;
  value: number;
  gatheringId: string;
}

export default function GatheringsCard({
  image,
  message,
  type,
  location,
  date,
  time,
  value,
  gatheringId,
}: GatheringCardProps) {
  return (
    <div className="shadow-l flex w-full flex-col gap-3 overflow-hidden rounded-3xl border-2 border-gray-100 xs:flex-row xl:w-[996px]">
      <GatheringCardImageSection image={image} message={message} />
      <GatheringCardContentSection
        type={type}
        location={location}
        date={date}
        time={time}
        value={value}
        gatheringId={gatheringId}
      />
    </div>
  );
}
