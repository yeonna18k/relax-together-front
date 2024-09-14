import ImageCard from '@/shared/common/ui/review-image/ImageCard';
import ReviewContent from './ReviewContent';

export interface ReviewCardProps {
  page: 'mypage' | 'reviews' | 'search';
  score: number;
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
      {props.page !== 'search' && (
        <ImageCard width={311} className="h-[156px] rounded-3xl md:w-[280px]" />
      )}
      <ReviewContent {...props} />
    </div>
  );
}
