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
}: MypageCardProps) {
  return (
    <li className="flex w-full flex-col gap-4 border-b-2 border-dashed pb-[23px] xs:flex-row">
      <ImageCard src={image} alt={alt} />
      <MypageCardContent
        title={name}
        location={location}
        participantCount={5}
        startGatheringTime="2024-09-14T08:30:00.000Z"
      />
    </li>
  );
}
