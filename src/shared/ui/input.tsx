'use client';

import EyeOff from '@/shared/assets/icons/eye_off.svg';
import EyeOn from '@/shared/assets/icons/eye_on.svg';
import { cn } from '@/shared/lib/utils';
import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'h-[44px] w-full rounded-md bg-gray-50 px-4 py-[10px] hover:ring-2 hover:ring-green-300 focus:outline-none focus:ring-2 focus:ring-green-600',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

const InputPassword = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const [toggled, setToggled] = React.useState(false);

  const handleToggle = () => setToggled(!toggled);

  return (
    <div className="relative flex items-center text-center">
      <input
        ref={ref}
        type={toggled ? 'text' : 'password'}
        className={cn(
          'h-[44px] w-[460px] rounded-md bg-[#f9fafb] px-[16px] py-[10px] text-[#1f2937] hover:ring-2 hover:ring-green-300 focus:outline-none focus:ring-2 focus:ring-green-600',
          'md:w-[350px] lg:w-[472px]',
          className,
        )}
        {...props}
      />
      <button
        type="button"
        className="absolute bottom-2 right-4 text-black"
        onClick={() => {
          handleToggle();
        }}
      >
        {toggled ? (
          <EyeOn height={24} width={24} />
        ) : (
          <EyeOff height={24} width={24} />
        )}
      </button>
    </div>
  );
});

InputPassword.displayName = 'InputPassword';
Input.displayName = 'Input';

export { Input, InputPassword };
