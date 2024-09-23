'use client';

import CanceledGatheringButton from '@/entities/mypage/ui/card/CanceledGatheringButton';
import WriteReviewButton from '@/entities/mypage/ui/card/WriteReviewButton';
import useCommonSearchParams from '@/shared/hooks/useCommonSearchParams';
import {
  UseChipStateTypes,
  useTimeComparison,
} from '@/shared/hooks/useTimeComparison';

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
  const { currentSubPage } = useCommonSearchParams();
  const status = useTimeComparison(startGatheringTime);
  // 마이페이지에서 나의 모임, 나의 리뷰, 내가 만든 모임을 페이지 searchParams로 구분하여 렌더링
  // 나의 모임(my-gatherings), 나의 리뷰(my-reviews), 내가 만든 모임(my-created-gatherings)

  if (currentSubPage === 'my-gatherings') {
    return statusComponentMap[status];
  }
  if (currentSubPage === 'my-reviews') {
    return <WriteReviewButton />;
  }
  return <></>;
}
