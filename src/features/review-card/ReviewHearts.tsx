import { MAX_SCORE } from '@/shared/lib/constants';
import HeartImage from './HeartImage';

export default function ReviewHearts({ score }: { score: number }) {
  const renderHearts = Array.from({ length: MAX_SCORE }).map((_, index) => {
    return index < score ? (
      <HeartImage active={true} />
    ) : (
      <HeartImage active={false} />
    );
  });
  return <div className="flex gap-[2px]">{renderHearts}</div>;
}
