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

const pageVariants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: 30,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
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
