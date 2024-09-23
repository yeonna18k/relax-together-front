import { Position } from '@/entities/mypage/ui/tab-section/SlideTabs';
import useTabPosition from '@/shared/hooks/useTabPosition';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';

export type Tab = {
  name: string;
  subPage: string;
};

export interface TabProps {
  tab: Tab;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}
export default function TabItem({ tab, setPosition }: TabProps) {
  const { name, subPage } = tab;
  const ref = useRef<HTMLLIElement>(null);
  const searchParams = useSearchParams();
  const currentSubPage = searchParams.get('subPage');
  const isActive = currentSubPage === subPage;
  const activeTextColor = isActive ? 'text-gray-900' : 'text-gray-400';

  useTabPosition({ isActive, ref, setPosition });
  return (
    <li
      ref={ref}
      className={`relative px-2.5 pb-1.5 pt-2 ${activeTextColor} text-lg font-semibold`}
    >
      <Link
        href={`/mypage?subPage=${subPage}${subPage === 'my-reviews' ? '&filter=completed' : ''}`}
      >
        {name}
      </Link>
    </li>
  );
}
