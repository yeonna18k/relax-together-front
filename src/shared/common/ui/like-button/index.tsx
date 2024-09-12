'use client';
import LikeHeartEmptyIcon from '@/shared/assets/icons/like-heart-empty-icon.svg';
import LikeHeartIcon from '@/shared/assets/icons/like-heart-icon.svg';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

interface LikeButtonProps {
  gatheringId: string;
}

/**
 * @description 좋아요 버튼
 * @description 좋아요 버튼을 누르면 찜한 모임으로 등록되고, 다시 누르면 찜한 모임에서 제외됩니다.
 * @description 좋아요 버튼을 누르면 찜한 모임의 개수가 증가하고, 다시 누르면 찜한 모임의 개수가 감소합니다.
 * @author Charles
 * @param {LikeButtonProps} { gatheringId }
 */
export default function LikeButton({ gatheringId }: LikeButtonProps) {
  const [, setLikedCount] = useLocalStorage('liked-count', 0);
  const [likedGatheringsIds, setLikedGatheringsIds] = useLocalStorage(
    'liked-gatherings-ids',
    [] as string[],
  );
  const [liked, setLiked] = useState(
    likedGatheringsIds.find(id => id === gatheringId) !== undefined,
  );

  const toggleLike = () => {
    if (liked) {
      setLikedCount(prev => prev - 1);
      setLikedGatheringsIds(prev => prev.filter(id => id !== gatheringId));
    } else {
      setLikedCount(prev => prev + 1);
      setLikedGatheringsIds(prev => [...prev, gatheringId]);
    }
    setLiked(prev => !prev);
  };
  return (
    <Button
      className={`relative h-12 w-12 rounded-full border-2 p-3 ${liked ? 'border-orange-50 bg-orange-50 hover:bg-orange-50 active:bg-orange-50' : 'border-gray-200 bg-white hover:bg-white active:bg-white'}`}
      onClick={toggleLike}
    >
      <LikeHeartEmptyIcon
        data-testid="like-heart-empty-icon"
        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform"
      />
      <LikeHeartIcon
        data-testid="like-heart-icon"
        className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform ${liked ? 'animate-fillHeart' : 'scale-0'}`}
      />
    </Button>
  );
}
