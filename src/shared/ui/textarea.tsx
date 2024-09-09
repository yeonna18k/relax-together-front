import * as React from 'react';

import { cn } from '../lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'h-[120px] w-full resize-none rounded-xl bg-gray-50 px-4 py-[10px] text-base font-medium text-gray-800 custom-scrollbar placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
