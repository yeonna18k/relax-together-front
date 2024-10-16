'use client';
import Xmark from '@/shared/assets/icons/xmark.svg';
import { useModal } from '@/shared/hooks/useModal';
import { cn } from '@/shared/lib/utils';
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/shared/ui/alert-dialog';
import { Button } from '@/shared/ui/button';
import { cva, type VariantProps } from 'class-variance-authority';

const footerVariants = cva('w-full', {
  variants: {
    variant: {
      default: 'flex justify-center gap-4',
      single: 'flex justify-center xs:justify-end',
      notice: 'flex justify-center gap-4',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface ModalProps {
  title?: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof footerVariants>['variant'];
  size: 'lg' | 'sm';
  disabled?: boolean;
  actionBtnName?: string;
  handleAction?: () => void;
  type?: 'submit' | 'button';
}

export default function Modal({
  title,
  children,
  variant = 'default',
  size,
  disabled,
  actionBtnName = '확인',
  handleAction,
  type = 'button',
}: ModalProps) {
  const { resetModal } = useModal();
  const isDefault = variant === 'default';

  const handleBtnClick = () => {
    resetModal();

    if (variant === 'notice' && handleAction) {
      handleAction();
    }
  };

  return (
    <AlertDialogContent variant={variant}>
      <AlertDialogHeader>
        <AlertDialogTitle
          className={`flex w-full ${title ? 'justify-between' : 'justify-end'}`}
        >
          <p>{title}</p>
          <Button
            variant="ghost"
            size="icon"
            className="p-0"
            onClick={handleBtnClick}
          >
            <Xmark className="stroke-gray-500 stroke-2 hover:stroke-gray-700" />
          </Button>
        </AlertDialogTitle>
        <AlertDialogDescription asChild>{children}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className={cn(footerVariants({ variant }))}>
        {isDefault && <AlertDialogCancel size={size}>취소</AlertDialogCancel>}
        <AlertDialogAction
          size={size}
          onClick={handleAction}
          disabled={disabled}
          type={type}
        >
          {actionBtnName}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
