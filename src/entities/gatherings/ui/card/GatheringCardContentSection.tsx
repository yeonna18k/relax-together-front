import { GatheringCardProps } from '@/entities/gatherings/ui/card';
import ProgressBar from '@/features/progress-bar';
import CardTitle from '@/shared/common/ui/card-title';
import ChipInfo from '@/shared/common/ui/chip-info';
import LikeButton from '@/shared/common/ui/like-button';
import { formatDate, formatTime } from '@/shared/lib/utils';
type GatheringType = '워케이션' | '달램핏' | '오피스 스트레칭' | '마인드풀니스';

interface GatheringCardContentSectionProps
  extends Omit<GatheringCardProps, 'imageUrl' | 'message'> {
  // isExpired?: boolean;
  name: string | null;
  type: GatheringType;
}

// displayType을 string | GatheringType 으로 처리
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
  // const isExpired = new Date(registrationEnd) < new Date(); // 등록 종료 날짜를 기준으로 계산

  // const cardClassName = isExpired ? 'blur-sm' : '';
  // 워케이션일 경우 type 대신 name을 사용하도록 처리
  const displayType: string | GatheringType =
    type === '워케이션' && name ? name : type;

  return (
    <div
      className={`$[cardClassName] flex w-full flex-col justify-between gap-5 py-4 sm:w-[calc(100%-280px)]`}
    >
      <div className="flex justify-between pl-6 pr-4">
        <div>
          <CardTitle type={displayType} location={location} />
          <div className="mt-2 flex items-start justify-start">
            <div className="items-start space-x-2">
              <ChipInfo type="date">{formatDate(dateTime)}</ChipInfo>
              <ChipInfo type="time">{formatTime(dateTime)}</ChipInfo>
            </div>
          </div>
        </div>
        <LikeButton gatheringId={id.toString()} />
      </div>

      {/* Progress Bar */}
      <ProgressBar
        participantCount={participantCount}
        capacity={capacity}
        id={id}
      />
    </div>
  );
}
