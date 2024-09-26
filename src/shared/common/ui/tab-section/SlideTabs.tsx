import { TabSectionProps } from '@/shared/common/ui/tab-section';
import TabItem from '@/shared/common/ui/tab-section/TabItem';

import { useState } from 'react';
import Indicator from './Indicator';

export type Position = {
  width: number;
  left: number;
};

export default function SlideTabs({
  tabs,
  href,
}: Pick<TabSectionProps, 'tabs' | 'href'>) {
  const [position, setPosition] = useState<Position>({
    width: 0,
    left: 0,
  });
  return (
    <ul className="relative flex w-[321px] gap-3">
      {tabs.map(tab => (
        <TabItem
          key={tab.subPage}
          tab={tab}
          setPosition={setPosition}
          href={href}
        />
      ))}
      <Indicator position={position} />
    </ul>
  );
}
