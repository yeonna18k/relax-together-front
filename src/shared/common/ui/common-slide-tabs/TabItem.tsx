import { Position } from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import { Tab } from '@/shared/fixture/tabs';

import useTabPosition from '@/shared/hooks/useTabPosition';
import { cn } from '@/shared/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

import Link from 'next/link';
import { useRef } from 'react';

const tabVariants = cva('relative flex items-center font-semibold', {
  variants: {
    variant: {
      default: 'px-2.5 pb-1.5 pt-2 text-lg',
      reviews: 'px-2.5 p-2 md:py-4',
      gatherings: 'py-4 text-base font-medium xl:text-3xl lg:font-bold pr-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export type TabItemVariants = VariantProps<typeof tabVariants>['variant'];

export interface TabProps {
  tab: Tab;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  path: string;
  isActive: boolean;
  variant?: TabItemVariants;
  className?: string;
}
export default function TabItem({
  tab,
  setPosition,
  path,
  isActive,
  variant,
  className,
}: TabProps) {
  const { name, IconComponent } = tab;
  const ref = useRef<HTMLLIElement>(null);

  const transTextColor = isActive ? 'text-gray-900' : 'text-gray-400';
  const transIconColor = isActive
    ? 'fill-gray-900 stroke-gray-900 h-8 w-8'
    : 'fill-gray-400 stroke-gray-400 h-8 w-8';

  useTabPosition({ isActive, ref, setPosition });
  return (
    <li
      ref={ref}
      // className variants로 사용하도록 내일 추가 할 것
      className={cn(tabVariants({ variant }), transTextColor, className)}
    >
      {IconComponent && <IconComponent className={transIconColor} />}
      <Link href={path} className={`${transTextColor}`} scroll={false}>
        {name}
      </Link>
    </li>
  );
}
