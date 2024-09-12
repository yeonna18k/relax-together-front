import { ReviewCardProps } from '@/features/review-card';
import HeartImage from './HeartImage';
import ReviewPlaceTag from './PlaceTag';
import ReviewProfile from './ReviewProfile';

export default function ReviewContent(props: ReviewCardProps) {
  const heartRendering = () => {
    const result = [];
    for (let i = 0; i < props.score; i++) {
      result.push(<HeartImage active={true} />);
    }
    for (let i = 0; i < 5 - props.score; i++) {
      result.push(<HeartImage active={false} />);
    }
    return result;
  };
  return (
    <div
      className={`flex ${props.page === 'search' ? 'min-h-[102px]' : 'h-[168px] md:h-[156px]'} flex-col gap-2 border-b-2 border-dashed border-b-gray-200 text-gray-700 md:w-full`}
    >
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[2px]">{heartRendering()}</div>
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
