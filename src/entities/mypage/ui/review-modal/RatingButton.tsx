import LikeHeartEmptyIcon from '@/shared/assets/icons/like-heart-empty-icon.svg';
import LikeHeartIcon from '@/shared/assets/icons/like-heart-icon.svg';
import { Button } from '@/shared/ui/button';

interface RatingButtonProps {
  rating: number;
  index: number;
}
export default function RatingButton({ rating, index }: RatingButtonProps) {
  console.log('🚀 ~ RatingButton ~ { rating, index }:', { rating, index });
  const liked = rating > index;
  return (
    <Button className="relative" variant="ghost" size="icon">
      <LikeHeartEmptyIcon
        data-testid="like-heart-empty-icon"
        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform"
      />
      <LikeHeartIcon
        data-testid="like-heart-icon"
        className={`stoke-pink-500 absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform fill-pink-500 ${rating <= 0 ? 'scale-0' : ''} ${liked ? 'animate-fillHeart' : 'animate-clearHeart'}`}
      />
    </Button>
  );
}
