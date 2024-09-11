import ReviewImage from '@/shared/common/ui/review-image';
import ReviewContent from '../../shared/common/ui/review-content';

interface ScoreProps {
  [key: string]: number;
}

export interface ReviewCardProps {
  page: 'mypage' | 'reviews' | 'search';
  score: ScoreProps[];
  user_name: string;
  user_image?: string;
  content: string;
  place: string;
  address: string;
  date: string;
}

export default function ReviewCard(props: ReviewCardProps) {
  return (
    <div className="flex w-full flex-col gap-6 md:max-w-[648px] md:flex-row lg:max-w-[948px]">
      {props.page !== 'search' && <ReviewImage />}
      <ReviewContent {...props} />
    </div>
  );
}
