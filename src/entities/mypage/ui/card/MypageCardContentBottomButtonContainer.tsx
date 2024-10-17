'use client';

import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';

import {
  timeComparisonStatus,
  UseChipStateTypes,
} from '@/entities/mypage/model/lib/utils';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import CanceledGatheringButton from '@/entities/mypage/ui/card/CanceledGatheringButton';
import WriteReviewButton from '@/entities/mypage/ui/card/WriteReviewButton';
import { SubPage } from '@/shared/lib/constants';

const statusComponentMap: Record<
  UseChipStateTypes,
  ({ id, reviewed }: Pick<MyGathering, 'id' | 'reviewed'>) => React.ReactNode
> = {
  scheduled: ({ id, reviewed }) => <CanceledGatheringButton id={id} />,
  completed: ({ id, reviewed }) => (
    <WriteReviewButton id={id} reviewed={reviewed} />
  ),
};

export default function MypageCardContentBottomButtonContainer({
  id,
  dateTime,
  reviewed,
}: Pick<MyGathering, 'dateTime' | 'id' | 'reviewed'>) {
  const { currentSubPage } = useCommonSearchParams();
  const status = timeComparisonStatus(dateTime);

  if (currentSubPage === SubPage.MY_GATHERINGS) {
    return statusComponentMap[status]({ id, reviewed });
  }
  if (currentSubPage === SubPage.MY_REVIEWS) {
    return <WriteReviewButton id={id} reviewed={reviewed} />;
  }
  return <></>;
}
