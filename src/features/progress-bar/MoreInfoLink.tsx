import ArrowRight from '@/shared/assets/icons/arrow-right.svg';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MotionLink = motion.create(Link);
interface MoreInfoLinkProps {
  id: number;
  isClosed: boolean;
}
export default function MoreInfoLink({ id, isClosed }: MoreInfoLinkProps) {
  const textStyles = isClosed
    ? 'text-green-400 w-full'
    : 'text-green-500 min-w-[65px]';
  const text = isClosed ? 'Closed' : 'join now';
  return (
    <MotionLink
      href={`/gatherings/${id}`}
      className="flex items-center gap-2 bg-transparent text-base font-semibold"
      initial={{ x: 0 }}
      whileHover={{
        x: [0, 10, 0],
        transition: {
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        },
      }}
    >
      <p className={`${textStyles}`}>{text}</p>
      {!isClosed && (
        <motion.div>
          <ArrowRight className="stroke-green-500 stroke-2" />
        </motion.div>
      )}
    </MotionLink>
  );
}
