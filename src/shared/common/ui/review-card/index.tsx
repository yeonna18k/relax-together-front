import ImageCard from '@/shared/common/ui/common-image/ImageCard';
import { Page } from '@/shared/lib/constants';
import { Review } from '@/shared/model';
import ReviewContent from './ReviewContent';
type ReviewCardPage = 'MYPAGE' | 'GATHERING_DETAIL' | 'ALL_REVIEWS';
export interface ReviewCardProps extends Review {
  page: ReviewCardPage;
}

export default function ReviewCard(props: ReviewCardProps) {
  return (
    <div className="flex w-full flex-col gap-6 md:max-w-[648px] md:flex-row lg:max-w-[948px]">
      {props.page !== Page.ALL_REVIEWS && props.page !== 'GATHERING_DETAIL' && (
        <ImageCard src="/assets/review-sample.png" alt="review-sample" />
      )}
      <ReviewContent {...props} />
    </div>
  );
}
