'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    capacity: number;
    reviews?: boolean;
  }
>(({ className, value, capacity, reviews, ...props }, ref) => {
  const isClosed = value === capacity;
  const bgColor = isClosed ? 'bg-green-400' : 'bg-green-500';

  const currentParticipants = value || 0;
  const progressPercentage = (currentParticipants / capacity) * 100;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-1 w-full overflow-hidden rounded-full bg-green-50',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-testid="indicator"
        className={`h-full w-full flex-1 transition-all ${bgColor} ${reviews && 'rounded-md !bg-gray-800'}`}
        style={{
          transform: `translateX(-${100 - progressPercentage}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
