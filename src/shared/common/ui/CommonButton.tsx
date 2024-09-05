import { Button, ButtonProps } from '@/shared/ui/button';

export default function CommonButton({ variant, size, content }: ButtonProps) {
	return (
		<>
			<Button variant={variant} size={size}>
				{content}
			</Button>
		</>
	);
}
