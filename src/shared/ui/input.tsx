'use client';

import { cn } from '@/shared/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
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
					'h-[44px] w-[460px] rounded-md bg-[#f9fafb] px-4 py-[10px] hover:ring-2 hover:ring-[#fdba74] focus:outline-none focus:ring-2 focus:ring-[#ea580c]',
					'md:w-[350px] lg:w-[472px]',
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
	const [showPassword, setShowPassword] = React.useState(false);
	const [inputState, setInputState] = React.useState<
		'default' | 'hover' | 'typing' | 'done'
	>('default');
	const [toggled, setToggled] = React.useState(false);

	const handleMouseEnter = () => setInputState('hover');
	const handleMouseLeave = () => setInputState('default');
	const handleChange = () => setInputState('typing');
	const handleBlur = () => setInputState('done');
	const handleToggle = () => setToggled(!toggled);

	return (
		<div className="relative flex items-center">
			<input
				ref={ref}
				type={showPassword ? 'text' : 'password'}
				className={cn(
					'h-[44px] w-[460px] rounded-md bg-[#f9fafb] px-[16px] py-[10px] text-[#1f2937] focus:outline-none focus:ring-2 focus:ring-[#ea580c]',
					'md:w-[350px] lg:w-[472px]',
					inputState === 'hover' && 'border-[#fdba74]',
					inputState === 'typing' && 'border-[#ea580c]',
					toggled && 'bg-gray-300',
					inputState === 'done' && 'border-[#f9fafb]',
					className,
				)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onChange={handleChange}
				onBlur={handleBlur}
				{...props}
			/>
			<button
				type="button"
				className="absolute right-3"
				onClick={() => {
					setShowPassword(!showPassword);
					handleToggle();
				}}
			>
				{showPassword ? (
					<Eye className="h-5 w-5" />
				) : (
					<EyeOff className="h-5 w-5" />
				)}
			</button>
		</div>
	);
});

InputPassword.displayName = 'InputPassword';
Input.displayName = 'Input';

export { Input, InputPassword };
