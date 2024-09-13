import ActiveHeart from '@/shared/assets/icons/heart-active.svg';
import DefaultHeart from '@/shared/assets/icons/heart-default.svg';
import { MAX_SCORE } from '@/shared/lib/constants';

export default function ReviewHearts({ score }: { score: number }) {
  const renderHearts = Array.from({ length: MAX_SCORE }).map((_, index) => {
    return index < score ? (
      <ActiveHeart data-testid="active-heart" />
    ) : (
      <DefaultHeart />
    );
  });
  return <div className="flex gap-[2px]">{renderHearts}</div>;
}
