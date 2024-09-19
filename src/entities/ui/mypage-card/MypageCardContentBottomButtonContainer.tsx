'use client';

import CanceledGatheringButton from '@/entities/ui/mypage-card/CanceledGatheringButton';
import WriteReviewButton from '@/entities/ui/mypage-card/WriteReviewButton';
import {
  UseChipStateTypes,
  useTimeComparison,
} from '@/shared/hooks/useTimeComparison';
import { useSearchParams } from 'next/navigation';

const statusComponentMap: Record<UseChipStateTypes, React.ReactNode> = {
  scheduled: <CanceledGatheringButton />,
  completed: <WriteReviewButton />,
};

interface MypageCardContentBottomButtonContainerProps {
  startGatheringTime: string;
}
export default function MypageCardContentBottomButtonContainer({
  startGatheringTime,
}: MypageCardContentBottomButtonContainerProps) {
  const searchParams = useSearchParams();
  const status = useTimeComparison(startGatheringTime);
  // 마이페이지에서 나의 모임, 나의 리뷰, 내가 만든 모임을 페이지 searchParams로 구분하여 렌더링
  // 나의 모임(my-gatherings), 나의 리뷰(my-reviews), 내가 만든 모임(my-created-gatherings)

  if (searchParams.get('filter') === 'my-gatherings') {
    return statusComponentMap[status];
  }
  if (searchParams.get('filter') === 'my-reviews') {
    return <WriteReviewButton />;
  }
  return <></>;
}
