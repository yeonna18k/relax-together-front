'use client';
import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

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

export default function AnimationContainer({ children }: PropsWithChildren) {
  const { currentSubPage, currentFilter } = useCommonSearchParams();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${currentSubPage}-${currentFilter}`}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
