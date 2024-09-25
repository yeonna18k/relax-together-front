import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import MyGatheringsSection from '@/features/mypage/ui/sub-page/MyGatheringsSection';
import MyHostedGatheringsSection from '@/features/mypage/ui/sub-page/MyHostedGatheringsSection';
import { AnimatePresence, motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const subPageTargetMap: Record<string, React.ReactNode> = {
  'my-gatherings': <MyGatheringsSection />,
  'my-reviews': <></>,
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
  const searchParams = useSearchParams();
  const [subPage, setSubPage] = useState<string | null>(null);

  useEffect(() => {
    setSubPage(searchParams.get('subPage'));
  }, [searchParams]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={subPage}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {subPage ? <>{subPageTargetMap[subPage]}</> : <LoadingSkeletonList />}
      </motion.div>
    </AnimatePresence>
  );
}
