import { useEffect } from 'react';
import { Position } from '../common/ui/tab-section/SlideTabs';

interface useTabPositionProps {
  isActive?: boolean;
  ref: React.RefObject<HTMLLIElement>;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
}
export default function useTabPosition({
  isActive,
  ref,
  setPosition,
}: useTabPositionProps) {
  useEffect(() => {
    if (isActive && ref.current) {
      const { offsetWidth, offsetLeft } = ref.current;
      setPosition({
        width: offsetWidth,
        left: offsetLeft,
      });
    }
  }, [isActive, setPosition, ref]);
}
