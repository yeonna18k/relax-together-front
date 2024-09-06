import { Button, ButtonProps } from '@/shared/ui/button';

interface CommonButtonProps extends ButtonProps {
  onClickHandler?: () => void;
}

export default function CommonButton({
  variant,
  size,
  content,
  onClickHandler,
}: CommonButtonProps) {
  return (
    <Button variant={variant} size={size} onClick={onClickHandler}>
      {content}
    </Button>
  );
}
