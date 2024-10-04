import { fetchGatherings } from '@/entities/gatherings/api/gatherings';
import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import Banner from '@/entities/gatherings/ui/main/Banner';

import GatheringSearch from '@/entities/gatherings/ui/main/GatheringSearch';
import GatheringCardListSection from '@/features/gatherings/ui/card-list-section';
import ModalContainer from '@/features/gatherings/ui/modal-container';
import { prefetchCommonInfiniteData } from '@/shared/api/queries/prefetch';
import CommonSearchFilter from '@/shared/common/ui/common-search-filter';
import { gatheringsSortItems } from '@/shared/fixture/select-items';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
const CreateButton = dynamic(
  () => import('@/entities/gatherings/ui/main/CreateButton'),
  {
    ssr: false,
  },
);

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
      <div
        draggable="false"
        className="absolute left-0 top-0 z-20 hidden h-[635px] w-full bg-[url('/assets/gathering-no-bg.png')] bg-contain bg-center bg-no-repeat xl:block"
      />
      <Suspense fallback={null}>
        <Banner />
      </Suspense>
      <div className="z-10 flex min-h-[calc(100vh-58px)] w-full flex-col items-center bg-white lg:min-h-[calc(100vh-71px)] xl:min-h-[calc(100vh-625px)]">
        <Suspense fallback={null}>
          <GatheringSearch />
          <CommonSearchFilter sortItems={gatheringsSortItems} />

          {/* 모임 목록 보여주기 */}
          <HydrationBoundary state={dehydrate(queryClient)}>
            <GatheringCardListSection />
          </HydrationBoundary>
        </Suspense>
      </div>
      <CreateButton />
      <ModalContainer />
    </div>
  );
}
