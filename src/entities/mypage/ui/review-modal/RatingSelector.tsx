'use client';
import RatingButton from '@/entities/mypage/ui/review-modal/RatingButton';
import { MAX_SCORE } from '@/shared/lib/constants';

interface RatingSelectorProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}
export default function RatingSelector({
  rating,
  setRating,
}: RatingSelectorProps) {
  /**
   * @description 이벤트 타겟의 x좌표를 이용해서 별점을 계산해주는 함수
   */
  const calculateRating = (e: React.MouseEvent<HTMLUListElement>) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const scale = width / MAX_SCORE;
    return Math.floor(x / scale) + 1;
  };

  /**
   * @description 마우스가 움직이는 이벤트를 계산함수에 전달
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    setRating(calculateRating(e));
  };
  return (
    <ul
      className="flex w-[136px] gap-1"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRating(prev => prev)}
      onClick={() => setRating(prev => prev)}
    >
      {Array.from({ length: MAX_SCORE }).map((_, i) => (
        <li key={`rating-btn-${i}`}>
          <RatingButton rating={rating} index={i} />
        </li>
      ))}
    </ul>
  );
}
