import * as React from 'react';

import { cn } from '@/shared/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full bg-gray-900 px-[7px] text-xs text-white',
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
