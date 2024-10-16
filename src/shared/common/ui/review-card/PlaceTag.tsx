import { ReviewCardProps } from '@/shared/common/ui/review-card';

export default function ReviewPlaceTag({
  gatheringType,
  gatheringLocation,
}: Pick<ReviewCardProps, 'gatheringType' | 'gatheringLocation'>) {
  return (
    <div className="flex gap-1 text-xs font-medium">
      <span>{gatheringType} 이용</span>
      <span>·</span>
      <span>{gatheringLocation}</span>
    </div>
  );
}
