import { Position } from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import { motion } from 'framer-motion';

interface IndicatorProps {
  position: Position;
}
export default function Indicator({ position }: IndicatorProps) {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute bottom-0 left-0 z-30 h-0.5 bg-gray-900"
    />
  );
}
