'use client';

import SlideTabs from '@/shared/common/ui/tab-section/SlideTabs';
import { Tab } from '@/shared/common/ui/tab-section/TabItem';
import { cn } from '@/shared/lib/utils';

export interface TabSectionProps {
  tabs: Array<Tab>;
  href: string;
  isView: boolean;
  buttonGroup: React.ReactNode;
  className?: string;
}
export default function TabSection({
  tabs,
  href,
  isView,
  buttonGroup,
  className,
}: TabSectionProps) {
  return (
    <section
      className={cn(
        'flex w-full flex-col gap-6 md:flex-row md:justify-between md:gap-0',
        className,
      )}
    >
      <SlideTabs tabs={tabs} href={href} />
      {isView && <>{buttonGroup}</>}
    </section>
  );
}
