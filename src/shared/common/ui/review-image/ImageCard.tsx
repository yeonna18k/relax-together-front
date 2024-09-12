import Image from 'next/image';

interface ImageCardProps {
  width: number;
  className?: string;
}

export default function ImageCard({ width, className }: ImageCardProps) {
  return (
    <Image
      src="/assets/review-sample.png"
      alt="review-sample-image"
      width={width}
      height={0}
      className={`${className || ''}`}
    />
  );
}
