import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import MyGatheringsSection from '@/features/mypage/ui/sub-page/MyGatheringsSection';
import MyHostedGatheringsSection from '@/features/mypage/ui/sub-page/MyHostedGatheringsSection';
import MyPendingReviewSection from '@/features/mypage/ui/sub-page/MyPedingReviewSection';
import MyWrittenReviewSection from '@/features/mypage/ui/sub-page/MyWrittenReviewSection';
import { useEffect, useState } from 'react';

const subPageTargetMap: Record<string, React.ReactNode> = {
  'my-gatherings': <MyGatheringsSection />,
  'pending-my-reviews': <MyPendingReviewSection />,
  'written-my-reviews': <MyWrittenReviewSection />,
  'my-hosted-gatherings': <MyHostedGatheringsSection />,
};

export default function SubPageContainer() {
  const { currentSubPage, currentFilter } = useCommonSearchParams();
  const [subPage, setSubPage] = useState<string | null>(null);

  useEffect(() => {
    setSubPage(`${currentFilter ? `${currentFilter}-` : ''}${currentSubPage}`);
  }, [currentSubPage, currentFilter]);

  return (
    <>{subPage ? <>{subPageTargetMap[subPage]}</> : <LoadingSkeletonList />}</>
  );
}
