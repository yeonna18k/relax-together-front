'use client';

import SlideTabs from '@/shared/common/ui/tab-section/SlideTabs';
import { Tab } from '@/shared/common/ui/tab-section/TabItem';
import { useSearchParams } from 'next/navigation';

export interface TabSectionProps {
  tabs: Array<Tab>;
  href: string;
  isView: boolean;
  buttonGroup: React.ReactNode;
}
export default function TabSection({
  tabs,
  href,
  isView,
  buttonGroup,
}: TabSectionProps) {
  const searchParams = useSearchParams();
  const subPage = searchParams.get('subPage');
  return (
    <section className="flex w-full flex-col gap-6 md:flex-row md:justify-between md:gap-0">
      <SlideTabs tabs={tabs} href={href} />
      {isView && <>{buttonGroup}</>}
    </section>
  );
}
