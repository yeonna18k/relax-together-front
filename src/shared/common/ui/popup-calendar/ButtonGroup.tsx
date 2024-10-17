import { CommonSize } from '@/shared/lib/constants';
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
      <Button variant="outline" size={CommonSize.SMALL} onClick={handleReset}>
        초기화
      </Button>
      <Button variant="default" size={CommonSize.SMALL} onClick={handleSubmit}>
        적용
      </Button>
    </div>
  );
}
