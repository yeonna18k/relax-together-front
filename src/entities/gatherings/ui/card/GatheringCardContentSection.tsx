import ProgressBar from '@/features/progress-bar';
import CardTitle from '@/shared/common/ui/card-title';
import ChipInfo from '@/shared/common/ui/chip-info';
import LikeButton from '@/shared/common/ui/like-button';
import { PickMyGathering } from '.';

interface GatheringCardContentSectionProps extends PickMyGathering {
  date: string;
  time: string;
  value: number;
  gatheringId: string;
}

export default function GatheringCardContentSection({
  type,
  location,
  date,
  time,
  value,
  gatheringId,
}: GatheringCardContentSectionProps) {
  return (
    <div className="flex w-full flex-col justify-between gap-4 pb-4 pl-4 pt-2 xs:w-[calc(100%-280px)]">
      <div className="flex justify-between">
        <div>
          <CardTitle type={type} location={location} />
          <div className="mt-2 flex items-start justify-start">
            <div className="items-start space-x-2">
              <ChipInfo type="date">{date}</ChipInfo>
              <ChipInfo type="time">{time}</ChipInfo>
            </div>
          </div>
        </div>
        <LikeButton gatheringId={gatheringId} />
      </div>

      {/* Progress Bar */}
      <ProgressBar value={value} />
    </div>
  );
}
