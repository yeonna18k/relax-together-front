'use client';
import ScoreButton from '@/features/mypage/ui/review-modal/ScoreButton';
import { MAX_SCORE } from '@/shared/lib/constants';

interface ScoreSelectorProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}
export default function ScoreSelector({ score, setScore }: ScoreSelectorProps) {
  /**
   * @description 이벤트 타겟의 x좌표를 이용해서 별점을 계산해주는 함수
   */
  const calculateScore = (e: React.MouseEvent<HTMLUListElement>) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const scale = width / MAX_SCORE;
    return Math.floor(x / scale) + 1;
  };

  /**
   * @description 마우스가 움직이는 이벤트를 계산함수에 전달
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    setScore(calculateScore(e));
  };
  return (
    <ul
      className="flex w-[136px] gap-1"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setScore(prev => prev)}
      onClick={() => setScore(prev => prev)}
    >
      {Array.from({ length: MAX_SCORE }).map((_, i) => (
        <li key={`score-btn-${i}`}>
          <ScoreButton score={score} index={i} />
        </li>
      ))}
    </ul>
  );
}
