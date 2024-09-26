import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import MypageCardContent from '@/entities/mypage/ui/card/MypageCardContent';
import ImageCard from '@/shared/common/ui/common-image/ImageCard';

interface MypageCardProps extends MyGathering {
  alt: string;
}

export default function MypageCard(props: MypageCardProps) {
  const { imageUrl, alt, ...rest } = props;
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl xs:flex-row md:gap-0">
      <ImageCard
        src={imageUrl}
        alt={alt}
        className="rounded-md md:rounded-xl"
      />
      <MypageCardContent {...rest} />
    </div>
  );
}
