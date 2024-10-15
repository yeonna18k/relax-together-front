import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import { fetchReviews } from '@/entities/reviews/api/reviews';
import CategoryTab from '@/entities/reviews/ui/category-tab';
import ReviewBanner from '@/entities/reviews/ui/review-banner';
import ReviewList from '@/entities/reviews/ui/review-list';
import ReviewScore from '@/entities/reviews/ui/review-score';
import { prefetchCommonInfiniteData } from '@/shared/api/queries/prefetch';
import CommonSearchFilter from '@/shared/common/ui/common-search-filter';
import { reviewsSortItems } from '@/shared/fixture/select-items';
import { Path } from '@/shared/lib/constants';
import { QueryClient } from '@tanstack/react-query';
import { Suspense } from 'react';

export default async function Reviews() {
  const queryClient = new QueryClient();
  await prefetchCommonInfiniteData(
    queryClient,
    ['reviews', additionalParams],
    fetchReviews,
    additionalParams,
  );

  return (
    <Suspense fallback={null}>
      <div className="mx-auto bg-gray-50 lg:max-w-[996px]">
        <ReviewBanner />
        <div className="px-4 md:px-6">
          <CategoryTab />
          <ReviewScore />
          <CommonSearchFilter
            sortItems={reviewsSortItems}
            path={Path.REVIEWS}
          />
          <ReviewList />
        </div>
      </div>
    </Suspense>
  );
}
