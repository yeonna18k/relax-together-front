import { fetchGatherings } from '@/entities/gatherings/api/gatherings';
import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import GatheringsPageContainer from '@/entities/gatherings/ui/main/GatheringsPageContainer';

import GatheringCardListSection from '@/features/gatherings/ui/card-list-section';
import ModalContainer from '@/features/gatherings/ui/modal-container';
import { prefetchCommonInfiniteData } from '@/shared/api/queries/prefetch';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import dynamic from 'next/dynamic';
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
    <>
      <GatheringsPageContainer>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <GatheringCardListSection />
        </HydrationBoundary>
      </GatheringsPageContainer>
      <CreateButton />
      <ModalContainer />
    </>
  );
}
