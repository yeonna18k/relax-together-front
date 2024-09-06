'use client';
import Image from 'next/image';

interface LogoProps {
  isMobile: boolean;
}
export default function Logo({ isMobile }: LogoProps) {
  return (
    <li>
      <Image
        className="ml-[18px] md:ml-[28px] xl:ml-0"
        priority
        src={isMobile ? '/assets/logo-small.svg' : '/assets/logo-large.svg'}
        alt="같이 달램"
        width={isMobile ? 56 : 73}
        height={isMobile ? 27 : 35}
      />
    </li>
  );
}
