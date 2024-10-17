import { gatheringsDetailApiService } from '@/entities/gatherings-detail/api/service/GatheringsDetailApiService';
import GatheringsDetailMain from '@/entities/gatherings-detail/ui/gatherings-detail-main';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export interface GatheringsDetail {
  params: {
    id: string;
  };
}

export default async function GatheringsDetail({ params }: GatheringsDetail) {
  const { id } = params;

  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['gathering', id],
      queryFn: () => gatheringsDetailApiService.getGatheringsInfo(id),
    }),
    queryClient.prefetchQuery({
      queryKey: ['participants', id],
      queryFn: () => gatheringsDetailApiService.getParticipantList(id),
    }),
    queryClient.prefetchQuery({
      queryKey: ['review', id, 0],
      queryFn: () =>
        gatheringsDetailApiService.getReviewList({ id, currentPage: 0 }),
    }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <GatheringsDetailMain id={id} />
    </HydrationBoundary>
  );
}
