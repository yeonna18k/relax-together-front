'use client';
import { Button } from '@/shared/ui/button';
import Image from 'next/image';

interface HamburgerBarProps {
  onClick?: () => void;
}
export default function HamburgerBar({ onClick }: HamburgerBarProps) {
  return (
    <Button variant="ghost" size="icon" onClick={onClick}>
      <Image
        priority
        src="/assets/hamburger.svg"
        alt="메뉴"
        width={24}
        height={24}
      />
    </Button>
  );
}
