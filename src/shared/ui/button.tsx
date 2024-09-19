import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold py-2.5 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'text-white bg-[#ea580c] hover:bg-[#c2410c] active:bg-[#9a3412] disabled:bg-[#9ca3af]',
        outlined:
          'bg-white text-[#ea580c] border border-[#ea580c] hover:text-[#f97316] hover:border-[#f97316] active:text-[#c2410c] active:border-[#c2410c]',
        disabled: ' bg-gray-400 h-10 rounded-md',
        enabled: 'bg-green-500 h-10 rounded-md',
      },
      size: {
        sm: 'w-[120px] px-3 text-sm',
        lg: 'w-full px-8 text-base',
        full: 'w-full text-sm font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'sm',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
