// content : 전체 / 오피스 스트레칭 / 마인드풀니스    -> props
// 선택 되었을 때 gray-900 선택 안되었을 때 gray-200  -> props
// sm - 모바일, lg - 태블릿, 모니터  -> 반응형

import { cn } from '@/shared/lib/utils';
import { ReactNode } from 'react';

interface ChipProps {
  selected: boolean;
  children: ReactNode;
}

export default function Chip({ selected, children }: ChipProps) {
  return (
    <button
      className={cn(
        `h-10 content-center rounded-xl px-3 text-sm font-medium md:px-4`,
        {
          'bg-gray-900 text-white': selected,
          'bg-gray-200 text-gray-900': !selected,
        },
      )}
    >
      {children}
    </button>
  );
}
