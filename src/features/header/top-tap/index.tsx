'use client';
import Chevron from '@/shared/assets/icons/signin-chevron.svg';
import CommonBadge from '@/shared/common/ui/badge';
import { cn } from '@/shared/lib/utils';
import { useResponsiveGNBPopoverStore } from '@/shared/store/useResponsiveGNBPopoverStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

interface TopTapProps {
  path: string;
  name: string;
  className?: string;
}
export default function TopTap({ path, name, className }: TopTapProps) {
  const currentPathName = usePathname();
  const [value] = useLocalStorage('liked-count', 0);
  const { resetPopover } = useResponsiveGNBPopoverStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link
      href={path}
      className={cn(
        `font-semibold text-gray-700 hover:text-green-500`,
        className,
        `${currentPathName === path ? 'text-green-500' : ''}`,
      )}
      onClick={() => resetPopover()}
      aria-label={`${path}로 이동`}
    >
      <p>{name}</p>
      {isClient && value > 0 && path === '/like-gatherings' && (
        <CommonBadge count={value} />
      )}
      {name === '로그인이 필요합니다.' ? (
        <Chevron
          width="24"
          height="24"
          fill="#9F9F9F"
          className="group-hover:fill-green-500"
        />
      ) : (
        <></>
      )}
    </Link>
  );
}
