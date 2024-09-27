import { Position } from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import { useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';

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
  const { width } = useWindowSize();
  useEffect(() => {
    if (isActive && ref.current) {
      const { offsetWidth, offsetLeft } = ref.current;
      setPosition({
        width: offsetWidth,
        left: offsetLeft,
      });
    }
  }, [isActive, setPosition, ref, width]);
}
