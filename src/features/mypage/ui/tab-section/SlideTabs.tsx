import Indicator from '@/features/mypage/ui/tab-section/Indicator';
import TabItem, { Tab } from '@/features/mypage/ui/tab-section/TabItem';
import { useState } from 'react';

const tabs: Array<Tab> = [
  { name: '나의 모임', subPage: 'my-gatherings' },
  { name: '나의 리뷰', subPage: 'my-reviews' },
  { name: '내가 만든 모임', subPage: 'my-hosted-gatherings' },
];

export type Position = {
  width: number;
  left: number;
};

export default function SlideTabs() {
  const [position, setPosition] = useState<Position>({
    width: 0,
    left: 0,
  });
  return (
    <ul className="relative flex w-[321px] gap-3">
      {tabs.map(tab => (
        <TabItem key={tab.subPage} tab={tab} setPosition={setPosition} />
      ))}
      <Indicator position={position} />
    </ul>
  );
}
