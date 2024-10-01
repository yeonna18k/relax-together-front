'use client';
import TabItem, {
  TabProps,
} from '@/shared/common/ui/common-slide-tabs/TabItem';

import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import { Tab } from '@/shared/fixture/tabs';
import { useState } from 'react';
import Indicator from './Indicator';

export type Position = {
  width: number;
  left: number;
};
export interface SlideTabsProps extends Pick<TabProps, 'path' | 'variant'> {
  tabs: Array<Tab>;
}
export default function SlideTabs({ tabs, path, variant }: SlideTabsProps) {
  const { currentSubPage } = useCommonSearchParams();
  const [position, setPosition] = useState<Position>({
    width: 0,
    left: 0,
  });
  const gap = variant === 'gatherings' ? 'gap-6' : 'gap-3';
  return (
    <ul className={`relative flex ${gap}`}>
      {tabs.map(tab => {
        const { subPage, filter } = tab;
        const isActive = currentSubPage === subPage;
        return (
          <TabItem
            key={tab.subPage}
            tab={tab}
            setPosition={setPosition}
            path={`/${path}?subPage=${subPage}${filter}`}
            isActive={isActive}
            variant={variant}
          />
        );
      })}
      <Indicator position={position} />
    </ul>
  );
}
