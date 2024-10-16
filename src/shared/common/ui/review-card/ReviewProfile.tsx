import { ReviewCardProps } from '@/shared/common/ui/review-card';
import Image from 'next/image';

export default function ReviewProfile({
  userName,
  userProfileImage,
}: Pick<ReviewCardProps, 'userName' | 'userProfileImage'>) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium">
      <Image
        src={userProfileImage || `/assets/logo-icon.svg`}
        alt="user-profile-img"
        width={24}
        height={24}
        className="rounded-full"
      />
      <span>{userName}</span>
      <span>|</span>
    </div>
  );
}
