import CategoryTab from '@/features/reviews/ui/category-tab';
import ReviewBanner from '@/features/reviews/ui/review-banner';
import ReviewFilter from '@/features/reviews/ui/review-filter';
import ReviewList from '@/features/reviews/ui/review-list';
import ReviewScore from '@/features/reviews/ui/review-score';

export default function Reviews() {
  return (
    <div>
      <ReviewBanner />
      <CategoryTab />
      <ReviewScore />
      <ReviewFilter />
      <ReviewList />
    </div>
  );
}
