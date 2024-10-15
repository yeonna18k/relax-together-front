'use client';
import Banner from '@/entities/gatherings/ui/main/Banner';
import GatheringSearch from '@/entities/gatherings/ui/main/GatheringSearch';
import CommonSearchFilter from '@/shared/common/ui/common-search-filter';
import { gatheringsSortItems } from '@/shared/fixture/select-items';
import { Path } from '@/shared/lib/constants';
import { PropsWithChildren, Suspense } from 'react';

export default function GatheringsPageContainer({
  children,
}: PropsWithChildren) {
  return (
    <Suspense fallback={null}>
      <div className="relative mt-0 flex w-full flex-col justify-center overflow-y-scroll bg-white px-4 md:px-6 xl:bg-transparent xl:px-0">
        <div className="absolute left-0 top-0 z-20 hidden h-[635px] w-full bg-[url('/assets/gathering-no-bg.png')] bg-contain bg-center bg-no-repeat xl:block" />
        <Banner />
        <div className="z-10 flex w-full flex-col items-center bg-white lg:min-h-[calc(100vh-71px)] xl:min-h-[calc(100vh-625px)]">
          <GatheringSearch />
          <CommonSearchFilter
            sortItems={gatheringsSortItems}
            path={Path.GATHERINGS}
          />
          {children}
        </div>
      </div>
    </Suspense>
  );
}
