'use client';
import CommonBadge from '@/shared/common/ui/badge';
import { cn } from '@/shared/lib/utils';
import { useResponsiveGNBPopoverStore } from '@/shared/store/useResponsiveGNBPopoverStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocalStorage } from 'usehooks-ts';

interface TopTapProps {
  path: string;
  name: string;
  className?: string;
}
export default function TopTap({ path, name, className }: TopTapProps) {
  const currentPathName = usePathname();
  const [value] = useLocalStorage('like-gatherings-count', 0);
  const { resetPopover } = useResponsiveGNBPopoverStore();

  return (
    <Link
      href={path}
      className={cn(
        `font-semibold text-gray-700 hover:text-green-500`,
        className,
        `${currentPathName === path ? 'text-green-500' : ''}`,
      )}
      onClick={() => resetPopover()}
    >
      <p>{name}</p>
      {value > 0 && path === '/like-gatherings' && (
        <CommonBadge count={value} />
      )}
    </Link>
  );
}
