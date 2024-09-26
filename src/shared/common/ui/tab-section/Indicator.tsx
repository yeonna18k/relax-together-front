import { motion } from 'framer-motion';
import { Position } from './SlideTabs';

interface IndicatorProps {
  position: Position;
}
export default function Indicator({ position }: IndicatorProps) {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute bottom-0 left-0 h-0.5 bg-gray-900"
    />
  );
}
