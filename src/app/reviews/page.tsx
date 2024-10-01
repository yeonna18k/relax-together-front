import CategoryTab from '@/entities/reviews/ui/category-tab';
import ReviewBanner from '@/entities/reviews/ui/review-banner';
import ReviewList from '@/entities/reviews/ui/review-list';
import ReviewScore from '@/entities/reviews/ui/review-score';
import ReviewFilter from '@/features/reviews/ui/review-filter';

export default function Reviews() {
  return (
    <div className="bg-gray-50">
      <ReviewBanner />
      <div className="px-4 md:px-6">
        <CategoryTab />
        <ReviewScore />
        <ReviewFilter />
        <ReviewList />
      </div>
    </div>
  );
}
