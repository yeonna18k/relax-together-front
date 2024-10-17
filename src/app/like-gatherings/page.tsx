import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import { fetchLikeGatherings } from '@/entities/like-gatherings/api/like-gatherings';
import LikeGatheringsBanner from '@/entities/like-gatherings/ui/like-gatherings-banner';
import LikeGatheringCardList from '@/entities/like-gatherings/ui/like-gatherings-main/LikeGatheringCardList';
import LikeGatheringsTitle from '@/entities/like-gatherings/ui/like-gatherings-main/LikeGatheringsTitle';
import { prefetchCommonInfiniteData } from '@/shared/api/queries/prefetch';

import CommonSearchFilter from '@/shared/common/ui/common-search-filter';
import { gatheringsSortItems } from '@/shared/fixture/select-items';
import { Path } from '@/shared/lib/constants';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Suspense } from 'react';

export default async function LikeGatherings() {
  const queryClient = new QueryClient();

  await prefetchCommonInfiniteData(
    queryClient,
    ['like-gatherings', additionalParams],
    fetchLikeGatherings,
    additionalParams,
  );

  return (
    <div className="mx-auto max-w-[996px]">
      <LikeGatheringsBanner />
      <div className="sm:px-6 lg:px-0">
        <Suspense fallback={null}>
          <LikeGatheringsTitle />
          <div className="px-4">
            <CommonSearchFilter
              sortItems={gatheringsSortItems}
              path={Path['LIKE_GATHERINGS']}
            />
            <HydrationBoundary state={dehydrate(queryClient)}>
              <LikeGatheringCardList />
            </HydrationBoundary>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
