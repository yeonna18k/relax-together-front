import CommonButton from '@/shared/common/ui/common-button';

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
      <CommonButton variant="outlined" size="sm" onClick={handleReset}>
        초기화
      </CommonButton>
      <CommonButton variant="default" size="sm" onClick={handleSubmit}>
        적용
      </CommonButton>
    </div>
  );
}
