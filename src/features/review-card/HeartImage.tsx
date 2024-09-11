import Image from 'next/image';

interface HeartImageProps {
  value: number;
}

export default function HeartImage({ value }: HeartImageProps) {
  return (
    <Image
      src={value ? '/assets/heart-active.svg' : '/assets/heart-default.svg'}
      alt={value ? 'active-heart' : 'default-heart'}
      width={24}
      height={24}
    />
  );
}
