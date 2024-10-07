'use client';
import Chevron from '@/shared/assets/icons/signin-chevron.svg';
import CommonBadge from '@/shared/common/ui/badge';
import { cn } from '@/shared/lib/utils';
import { useResponsiveGNBPopoverStore } from '@/shared/store/useResponsiveGNBPopoverStore';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-between">
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
      {path === '/signin' ? (
        <Chevron
          width="24"
          height="24"
          className="cursor-pointer"
          fill="#9F9F9F"
          onClick={() => {
            resetPopover();
            router.push(path);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
