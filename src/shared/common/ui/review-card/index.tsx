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
    <div className="flex w-full flex-col gap-6 sm:flex-row lg:max-w-[948px]">
      {props.page !== Page.GATHERING_DETAIL && (
        <ImageCard
          src={props.gatheringImage || `/assets/review-sample.png`}
          alt="review-image"
          className="xs:w-full sm:h-[156px] sm:w-[280px]"
        />
      )}
      <ReviewContent {...props} />
    </div>
  );
}
