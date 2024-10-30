import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

interface MypageImageProps {
  image?: string;
  className?: string;
}
export default function MypageImage({ image, className }: MypageImageProps) {
  const isDefaultImage = image === undefined || image === '';
  return (
    <Image
      priority
      src={isDefaultImage ? '/assets/default-user.svg' : image}
      alt="user"
      width={72}
      height={72}
      className={cn('h-[72px] w-[72px] rounded-full', className)}
    />
  );
}
