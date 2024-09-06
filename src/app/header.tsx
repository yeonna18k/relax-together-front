'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useResizeObserver } from 'usehooks-ts';

export default function Header() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { width } = useResizeObserver({
    ref,
    box: 'border-box',
  });
  console.log('🚀 ~ Header ~ width:', width);
  return (
    <header
      className="h-[60px] w-full border-b-2 border-black bg-orange-600"
      ref={ref}
    >
      <nav className="mx-auto flex w-full items-center justify-between bg-transparent py-[12.5px] xl:max-w-[1200px]">
        <Image
          priority
          src="/assets/logo-large.svg"
          alt="같이 달램"
          width={73}
          height={35}
        />
      </nav>
    </header>
  );
}
