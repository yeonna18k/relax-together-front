import TagClock from '@/shared/common/ui/tag-clock';
import Image from 'next/image';

interface GatheringCardImageSectionProps {
  image: string;
  message: string;
}

export default function GatheringCardImageSection({
  image,
  message,
}: GatheringCardImageSectionProps) {
  return (
    <div className="relative flex h-[156px] w-full justify-start sm:w-[280px]">
      <Image
        className="h-full w-full rounded-bl-lg rounded-tl-lg object-cover"
        priority
        src={image}
        alt="Card Image"
        width={280}
        height={156}
      />
      {/* TagClock을 이미지의 오른쪽 상단에 고정 */}
      <div className="absolute right-0 top-0">
        <TagClock message={message} variant="default" />
      </div>
    </div>
  );
}
