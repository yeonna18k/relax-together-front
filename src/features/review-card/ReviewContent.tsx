import { ReviewCardProps } from '@/features/review-card';
import ReviewPlaceTag from './PlaceTag';
import ReviewHearts from './ReviewHearts';
import ReviewProfile from './ReviewProfile';

export default function ReviewContent(props: ReviewCardProps) {
  return (
    <div
      className={`flex ${props.page === 'search' ? 'min-h-[102px]' : 'h-[168px] md:h-[156px]'} flex-col gap-2 border-b-2 border-dashed border-b-gray-200 text-gray-700 md:w-full`}
    >
      <div className="flex flex-col gap-[10px]">
        <ReviewHearts score={props.score} />
        <div className="line-clamp-3 overflow-hidden text-sm font-medium">
          {props.content}
        </div>
        {props.page !== 'search' && (
          <ReviewPlaceTag place={props.place} address={props.address} />
        )}
      </div>
      <div className="font-xs text-medium flex items-center gap-3">
        {props.page !== 'mypage' && <ReviewProfile user={props.user_name} />}
        <div className="text-xs font-medium text-gray-500">{props.date}</div>
      </div>
    </div>
  );
}
