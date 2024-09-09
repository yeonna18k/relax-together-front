'use client';
import CommonBadge from '@/shared/common/ui/badge';
import { cn } from '@/shared/lib/utils';
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

  return (
    <Link
      href={path}
      className={cn(
        `font-semibold text-gray-900 hover:text-orange-600 md:text-white hover:md:text-gray-900 ${currentPathName === path ? 'text-orange-600 md:text-gray-900' : ''}`,
        className,
      )}
    >
      <p>{name}</p>
      {value > 0 && path === '/like-gatherings' && (
        <CommonBadge count={value} />
      )}
    </Link>
  );
}
