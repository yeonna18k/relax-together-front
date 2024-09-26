import { Position } from '@/shared/common/ui/tab-section/SlideTabs';
import useCommonSearchParams from '@/shared/hooks/useCommonSearchParams';
import useTabPosition from '@/shared/hooks/useTabPosition';

import Link from 'next/link';
import { useRef } from 'react';

export type Tab = {
  children: React.ReactNode;
  subPage: string;
};

export interface TabProps {
  tab: Tab;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  href: string;
}
export default function TabItem({ tab, setPosition, href }: TabProps) {
  const { children, subPage } = tab;
  const ref = useRef<HTMLLIElement>(null);
  const { currentSubPage } = useCommonSearchParams();
  const isActive = currentSubPage === subPage;
  const activeTextColor = isActive ? 'text-gray-900' : 'text-gray-400';

  useTabPosition({ isActive, ref, setPosition });
  return (
    <li
      ref={ref}
      className={`relative px-2.5 pb-1.5 pt-2 ${activeTextColor} text-lg font-semibold`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
