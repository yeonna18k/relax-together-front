import Image from 'next/image';

interface HeartImageProps {
  value: number;
  key: number;
}

export default function HeartImage({ value, key }: HeartImageProps) {
  return (
    <Image
      key={key}
      src={value ? '/assets/heart-active.svg' : '/assets/heart-default.svg'}
      alt={value ? 'active-heart' : 'default-heart'}
      width={24}
      height={24}
    />
  );
}
