import Image from 'next/image';

export default function HeartImage({ active }: { active: boolean }) {
  return (
    <Image
      src={active ? '/assets/heart-active.svg' : '/assets/heart-default.svg'}
      alt={active ? 'active-heart' : 'default-heart'}
      width={24}
      height={24}
    />
  );
}
