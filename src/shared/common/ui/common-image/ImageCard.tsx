import { cn } from '@/shared/lib/utils';
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageCard({ src, alt, className }: ImageCardProps) {
  return (
    <div className="relative h-[214px] w-full sm:h-[156px] sm:w-[280px]">
      <Image
        src={src}
        alt={alt}
        fill
        className={cn('rounded-md object-cover md:rounded-xl', className)}
        priority
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
      />
    </div>
  );
}
