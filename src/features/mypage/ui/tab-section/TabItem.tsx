import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import useTabPosition from '@/features/mypage/model/hooks/useTabPosition';
import { Position } from '@/features/mypage/ui/tab-section/SlideTabs';

import Link from 'next/link';
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
  const { currentSubPage } = useCommonSearchParams();
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
