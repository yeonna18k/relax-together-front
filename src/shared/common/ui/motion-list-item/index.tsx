'use client';
import { cn } from '@/shared/lib/utils';
import { HTMLMotionProps, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface MotionListItemProps extends HTMLMotionProps<'li'> {
  index: number;
  className?: string;
}
export default function MotionListItem({
  index,
  children,
  className,
  ...motionProps
}: PropsWithChildren<MotionListItemProps>) {
  return (
    <motion.li
      className={cn(
        'border-b-2 border-dashed border-gray-300 py-6 first:pt-0',
        className,
      )}
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3, delay: index * 0.1 }}
      {...motionProps}
    >
      {children}
    </motion.li>
  );
}
