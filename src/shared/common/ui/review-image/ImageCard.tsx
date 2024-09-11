import Image from 'next/image';
import { CSSProperties } from 'react';

interface ImageCardProps {
  width: string;
  height: string;
  style?: CSSProperties;
}

export default function ImageCard({ width, height, style }: ImageCardProps) {
  return (
    <div className={`relative ${width} ${height} flex-shrink-0`}>
      <Image
        src="/assets/review-sample.png"
        alt="review-sample-image"
        fill
        style={{ objectFit: 'cover', ...style }}
      />
    </div>
  );
}
