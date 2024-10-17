import { Button } from '@/shared/ui/button';

interface ButtonGroupProps {
  handleReset: () => void;
  handleSubmit: () => void;
}

/**
 * @description PopupCalendar ButtonGroup 컴포넌트
 * @author Charles
 * @param {ButtonGroupProps} { handleReset, handleSubmit }
 */
export default function ButtonGroup({
  handleReset,
  handleSubmit,
}: ButtonGroupProps) {
  return (
    <div className="flex w-full justify-between">
      <Button
        variant="outline"
        size="sm"
        onClick={handleReset}
        aria-label="초기화"
      >
        초기화
      </Button>
      <Button
        variant="default"
        size="sm"
        onClick={handleSubmit}
        aria-label="적용"
      >
        적용
      </Button>
    </div>
  );
}
