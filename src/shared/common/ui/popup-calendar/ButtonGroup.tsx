import CommonButton from '@/shared/common/ui/common-button';
import { CommonSize } from '@/shared/lib/constants';

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
      <CommonButton
        variant="outline"
        size={CommonSize.SMALL}
        onClick={handleReset}
      >
        초기화
      </CommonButton>
      <CommonButton
        variant="default"
        size={CommonSize.SMALL}
        onClick={handleSubmit}
      >
        적용
      </CommonButton>
    </div>
  );
}
