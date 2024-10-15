'use client';
import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import SlideTabs from '@/shared/common/ui/common-slide-tabs/SlideTabs';

import FilterButtonGroup from '@/shared/common/ui/filter-button-group';
import { mypageFilters } from '@/shared/fixture/filter';
import { mypageTabs } from '@/shared/fixture/tabs';
import { Path } from '@/shared/lib/constants';

export default function TabSection() {
  const { currentSubPage } = useCommonSearchParams();

  return (
    <section className="flex w-full flex-col gap-6 md:flex-row md:justify-between md:gap-0">
      <SlideTabs tabs={mypageTabs} path={Path.MYPAGE} />
      {currentSubPage === 'my-reviews' && (
        <FilterButtonGroup filters={mypageFilters} path={Path.MYPAGE} />
      )}
    </section>
  );
}
