import { ReviewCardProps } from '@/shared/common/ui/review-card';
import { Page } from '@/shared/lib/constants';
import { formatFullDate } from '@/shared/lib/utils';
import ReviewPlaceTag from './PlaceTag';
import ReviewHearts from './ReviewHearts';
import ReviewProfile from './ReviewProfile';

export default function ReviewContent(props: ReviewCardProps) {
  const {
    page,
    score,
    comment,
    gatheringType,
    gatheringLocation,
    userName,
    userProfileImage,
    createdDate,
  } = props;
  return (
    <div
      className={`flex ${page === Page.ALL_REVIEWS || page === Page.GATHERING_DETAIL ? 'min-h-[102px]' : 'h-[168px] md:h-[156px]'} ${page === Page.GATHERING_DETAIL && 'py-4'} flex-col gap-2 border-b-2 border-dashed border-b-gray-200 text-gray-700 md:w-full`}
    >
      <div className="flex flex-col gap-[10px]">
        <ReviewHearts score={score} />
        <div className="line-clamp-3 overflow-hidden text-sm font-medium">
          {comment}
        </div>
        {page !== Page.GATHERING_DETAIL && (
          <ReviewPlaceTag
            gatheringType={gatheringType}
            gatheringLocation={gatheringLocation}
          />
        )}
      </div>
      <div className="font-xs text-medium flex items-center gap-3">
        {page !== Page.MYPAGE && (
          <ReviewProfile
            userName={userName}
            userProfileImage={userProfileImage}
          />
        )}
        <div className="text-xs font-medium text-gray-500">
          {formatFullDate(createdDate)}
        </div>
      </div>
    </div>
  );
}
