import Heart from '@/shared/assets/icons/heart.svg';
import { MAX_SCORE } from '@/shared/lib/constants';

export default function ReviewHearts({ score }: { score: number }) {
  return (
    <ul className="flex gap-[2px]">
      {Array.from({ length: MAX_SCORE }).map((_, index) => (
        <li key={`heart-${index}`}>
          <Heart
            className={`${index < score ? 'fill-pink-500' : 'fill-gray-300'}`}
          />
        </li>
      ))}
    </ul>
  );
}
