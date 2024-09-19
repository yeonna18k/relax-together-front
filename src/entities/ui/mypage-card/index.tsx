import { Gathering } from '@/entities/model/gathering';
import MypageCardContent from '@/entities/ui/mypage-card/MypageCardContent';
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
    <li className="flex w-full flex-col gap-4 border-b-2 border-dashed pb-[23px] xs:flex-row">
      <ImageCard src={image} alt={alt} />
      <MypageCardContent
        title={name}
        location={location}
        participantCount={participantCount}
        startGatheringTime={dateTime}
      />
    </li>
  );
}
