import CategoryTab from '@/entities/reviews/ui/category-tab';
import ReviewBanner from '@/entities/reviews/ui/review-banner';
import ReviewList from '@/entities/reviews/ui/review-list';
import ReviewScore from '@/entities/reviews/ui/review-score';
import CommonSearchFilter from '@/shared/common/ui/common-search-filter';
import { reviewsSortItems } from '@/shared/fixture/select-items';
import { Path } from '@/shared/lib/constants';

export default function Reviews() {
  return (
    <div className="mx-auto bg-gray-50 lg:max-w-[996px]">
      <ReviewBanner />
      <div className="px-4 md:px-6">
        <CategoryTab />
        <ReviewScore />
        <CommonSearchFilter sortItems={reviewsSortItems} path={Path.reviews} />
        <ReviewList />
      </div>
    </div>
  );
}
