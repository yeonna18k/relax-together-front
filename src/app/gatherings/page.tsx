import { fetchGatherings } from '@/entities/gatherings/api/gatherings';
import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import GatheringCardListSection from '@/entities/gatherings/ui/card-list-section';
import Banner from '@/entities/gatherings/ui/main/Banner';
import CreateButton from '@/entities/gatherings/ui/main/CreateButton';
import GatheringCreateModal from '@/entities/gatherings/ui/main/GatheringCreateModal';
import GatheringSearch from '@/entities/gatherings/ui/main/GatheringSearch';
import { prefetchCommonInfiniteData } from '@/shared/api/queries/prefetch';
import CommonSearchFilter from '@/shared/common/ui/common-search-filter';
import { gatheringsSortItems } from '@/shared/fixture/select-items';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Suspense } from 'react';

if (process.env.NODE_ENV === 'development') {
  const { server } = require('../../shared/mocks/node');
  server.listen();
}
export default async function Gatherings() {
  const queryClient = new QueryClient();
  await prefetchCommonInfiniteData(
    queryClient,
    ['gatherings', additionalParams],
    fetchGatherings,
    additionalParams,
  );

  return (
    <div className="relative flex w-full flex-col justify-center bg-white px-4 md:px-6 xl:bg-transparent xl:px-0">
      <div className="absolute left-0 top-0 z-20 hidden h-[635px] w-full bg-[url('/assets/gathering-no-bg.png')] bg-contain bg-center bg-no-repeat xl:block" />
      <Suspense fallback={null}>
        <Banner />
      </Suspense>
      <div className="z-10 flex h-screen w-full flex-col items-center bg-white">
        <Suspense fallback={null}>
          <GatheringSearch />
          <CommonSearchFilter sortItems={gatheringsSortItems} />
        </Suspense>

        {/* 모임 목록 보여주기 */}
        <HydrationBoundary state={dehydrate(queryClient)}>
          <GatheringCardListSection />
        </HydrationBoundary>
      </div>
      <CreateButton />
      <GatheringCreateModal />
    </div>
  );
}
