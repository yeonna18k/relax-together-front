'use client';
import LikeHeartEmptyIcon from '@/shared/assets/icons/like-heart-empty-icon.svg';
import LikeHeartIcon from '@/shared/assets/icons/like-heart-icon.svg';
import { Button } from '@/shared/ui/button';
import { useEffect, useState } from 'react';

interface RatingButtonProps {
  score: number;
  index: number;
}
export default function ScoreButton({ score, index }: RatingButtonProps) {
  const [isAnimate, setIsAnimate] = useState(false);
  const liked = score > index;
  useEffect(() => {
    setIsAnimate(liked);
  }, [liked]);

  return (
    <Button className="relative" variant="ghost" size="icon">
      <LikeHeartEmptyIcon
        data-testid="like-heart-empty-icon"
        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform"
      />
      <LikeHeartIcon
        data-testid="like-heart-icon"
        className={`stoke-pink-500 absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform fill-pink-500 ${!isAnimate ? 'scale-0' : liked ? 'animate-fillHeart' : 'animate-clearHeart'}`}
      />
    </Button>
  );
}
