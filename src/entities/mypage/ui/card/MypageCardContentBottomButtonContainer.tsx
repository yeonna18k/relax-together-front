'use client';

import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import {
  UseChipStateTypes,
  useTimeComparison,
} from '@/entities/mypage/model/hooks/useTimeComparison';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import CanceledGatheringButton from '@/entities/mypage/ui/card/CanceledGatheringButton';
import WriteReviewButton from '@/entities/mypage/ui/card/WriteReviewButton';

const statusComponentMap: Record<
  UseChipStateTypes,
  (id: number) => React.ReactNode
> = {
  scheduled: _ => <CanceledGatheringButton />,
  completed: id => <WriteReviewButton id={id} />,
};

export default function MypageCardContentBottomButtonContainer({
  id,
  dateTime,
}: Pick<MyGathering, 'dateTime' | 'id'>) {
  const { currentSubPage } = useCommonSearchParams();
  const status = useTimeComparison(dateTime);

  if (currentSubPage === 'my-gatherings') {
    return statusComponentMap[status](id);
  }
  if (currentSubPage === 'my-reviews') {
    return <WriteReviewButton id={id} />;
  }
  return <></>;
}
