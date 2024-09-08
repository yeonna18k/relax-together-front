import { Button, ButtonProps } from '@/shared/ui/button';

interface CommonButtonProps extends ButtonProps {
  variant: 'default' | 'outlined';
  size: 'sm' | 'lg';
}

export default function CommonButton({
  variant,
  size,
  children,
  ...props
}: CommonButtonProps) {
  return (
    <Button
      data-testid="common-button"
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
}
