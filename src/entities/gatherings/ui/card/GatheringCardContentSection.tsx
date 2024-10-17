import { GatheringCardProps } from '@/entities/gatherings/ui/card';
import ProgressBar from '@/features/progress-bar';
import CardTitle from '@/shared/common/ui/card-title';
import ChipInfo from '@/shared/common/ui/chip-info';
import LikeButton from '@/shared/common/ui/like-button';
import { ChipInfoType } from '@/shared/lib/constants';
import { formatDate, formatTime } from '@/shared/lib/utils';

interface GatheringCardContentSectionProps
  extends Omit<GatheringCardProps, 'imageUrl' | 'message'> {}

export default function GatheringCardContentSection(
  props: GatheringCardContentSectionProps,
) {
  const {
    id,
    type,
    location,
    dateTime,
    participantCount,
    capacity,
    name,
    registrationEnd,
  } = props;

  return (
    <div className="flex w-full flex-col justify-between gap-5 py-4 sm:w-[calc(100%-280px)]">
      <div className="flex justify-between pl-6 pr-4">
        <div>
          <CardTitle type={type} name={name} location={location} />
          <div className="mt-2 flex items-start justify-start">
            <div className="items-start space-x-2">
              <ChipInfo type={ChipInfoType.DATE}>
                {formatDate(dateTime)}
              </ChipInfo>
              <ChipInfo type={ChipInfoType.TIME}>
                {formatTime(dateTime)}
              </ChipInfo>
            </div>
          </div>
        </div>
        <LikeButton gatheringId={id.toString()} />
      </div>
      <ProgressBar
        participantCount={participantCount}
        capacity={capacity}
        id={id}
      />
    </div>
  );
}
