import { Gathering } from '@/entities/mypage/model/gathering';
import MypageCardContent from '@/entities/mypage/ui/card/MypageCardContent';
import ImageCard from '@/shared/common/ui/common-image/ImageCard';

interface MypageCardProps extends Gathering {
  alt: string;
}

export default function MypageCard({
  image,
  alt,
  name,
  location,
  participantCount,
  dateTime,
}: MypageCardProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl xs:flex-row md:gap-0">
      <ImageCard src={image} alt={alt} />
      <MypageCardContent
        title={name}
        location={location}
        participantCount={participantCount}
        startGatheringTime={dateTime}
      />
    </div>
  );
}
