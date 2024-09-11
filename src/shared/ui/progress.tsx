'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    isClosed: boolean;
  }
>(({ className, value, isClosed, ...props }, ref) => {
  const bgColor = isClosed ? 'bg-orange-400' : 'bg-orange-600';

  const maxCapacity = 20;
  const currentParticipants = value || 0;
  const progressPercentage = (currentParticipants / maxCapacity) * 100;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-1 w-full overflow-hidden rounded-full bg-orange-50',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-testid="indicator"
        className={`h-full w-full flex-1 transition-all ${bgColor}`}
        style={{
          transform: `translateX(-${100 - progressPercentage}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };