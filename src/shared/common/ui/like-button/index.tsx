'use client';
import LikeHeartEmptyIcon from '@/shared/assets/icons/like-heart-empty-icon.svg';
import LikeHeartIcon from '@/shared/assets/icons/like-heart-icon.svg';
import { useLikeStore } from '@/shared/store/useLikeStore';
import { Button } from '@/shared/ui/button';
import { useEffect } from 'react';
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

  const { setLikedIds, removeLikedId } = useLikeStore();
  const liked = likedGatheringsIds.includes(gatheringId);

  useEffect(() => {
    setLikedIds(likedGatheringsIds);
  }, [likedGatheringsIds, setLikedIds]);

  const toggleLike = () => {
    if (liked) {
      setLikedCount(prev => prev - 1);
      setLikedGatheringsIds(prev => prev.filter(id => id !== gatheringId));
      removeLikedId(gatheringId);
    } else {
      setLikedCount(prev => prev + 1);
      setLikedGatheringsIds(prev => [...prev, gatheringId]);
    }
  };

  return (
    <Button
      className={`relative z-20 h-12 w-12 rounded-full border-2 p-3 ${liked ? 'border-pink-50 bg-pink-50 hover:bg-pink-50 active:bg-pink-50' : 'border-gray-200 bg-white hover:bg-white active:bg-white'}`}
      onClick={toggleLike}
      aria-label="좋아요 버튼"
    >
      <LikeHeartEmptyIcon
        data-testid="like-heart-empty-icon"
        className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform"
      />
      <LikeHeartIcon
        data-testid="like-heart-icon"
        className={`stoke-pink-500 absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform fill-pink-500 ${liked ? 'animate-fillHeart' : 'scale-0'}`}
      />
    </Button>
  );
}
