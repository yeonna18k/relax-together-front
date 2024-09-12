import { MAX_SCORE } from '@/shared/lib/constants';
import HeartImage from './HeartImage';

export default function ReviewHearts({ score }: { score: number }) {
  const renderHearts = Array.from({ length: MAX_SCORE }).map((_, index) => {
    return index < score ? (
      <HeartImage active={true} key={`heart-${index}`} />
    ) : (
      <HeartImage active={false} key={`heart-${index}`} />
    );
  });
  return <div className="flex gap-[2px]">{renderHearts}</div>;
}
