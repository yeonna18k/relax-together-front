'use client';
import Logo from '@/features/logo';
import TopTap from '@/shared/common/ui/top-tap';
import { useRef } from 'react';
import { useResizeObserver } from 'usehooks-ts';

export default function Header() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { width = 0 } = useResizeObserver({
    ref,
    box: 'border-box',
  });
  const isMobile = width < 376;
  return (
    <header
      className="h-[60px] w-full border-b-2 border-black bg-orange-600"
      ref={ref}
    >
      <nav className="mx-auto flex w-full items-center justify-between bg-transparent py-[16.5px] xs:py-[12.5px] xl:max-w-[1200px]">
        <ul className="flex items-center gap-3">
          <Logo isMobile={isMobile} />
          <TopTap path="/gatherings" name="모임 찾기" />
          <TopTap path="/like-gatherings" name="찜한 모임" />
          <TopTap path="/reviews" name="모든 리뷰" />
        </ul>
      </nav>
    </header>
  );
}
