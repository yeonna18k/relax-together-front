import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageCard({ src, alt, className }: ImageCardProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={311}
      height={156}
      className={cn('w-full rounded-3xl xs:w-[280px]', className)}
    />
  );
}
