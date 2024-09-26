import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold py-2.5 ring-offset-white transition-colors focus-visible:outline-none disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'text-white bg-green-600 hover:bg-bg-green-700 active:bg-green-800 disabled:bg-gray-400 rounded-md',
        outline:
          'bg-white text-green-500 border border-green-500 hover:text-green-600 hover:border-green-600 active:text-bg-green-700 active:border-bg-green-700 rounded-md disabled:text-gray-500',
        ghost: 'bg-transparent',
        disabled: ' bg-gray-400 h-10 rounded-md',
        enabled: 'bg-green-500 h-10 rounded-md',
        filter: 'bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-md',
      },
      size: {
        default: 'py-2.5 px-4 text-sm',
        sm: 'w-[120px] h-10 px-3 text-sm',
        lg: 'w-full h-10 px-8 text-base',
        icon: 'h-6 w-6',
        full: 'w-full text-sm font-semibold',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
