import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

interface MypageImageProps {
  image?: string;
  className?: string;
}
export default function MypageImage({ image, className }: MypageImageProps) {
  return (
    <Image
      priority
      src={image || '/assets/default-user.svg'}
      alt="user"
      width={72}
      height={72}
      className={cn('h-[72px] w-[72px]', className)}
    />
  );
}
