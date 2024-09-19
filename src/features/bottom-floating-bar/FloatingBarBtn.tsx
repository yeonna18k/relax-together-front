import CommonButton from '@/shared/common/ui/common-button';
import { BottomFloatingBarProps } from '.';

export default function FloatingBarBtn({ isHost }: BottomFloatingBarProps) {
  // const handleJoinBtnClick = () => {};

  // const handleCancleBtnClick = () => {};

  // const handleShareBtnClick = () => {};

  return (
    <>
      {isHost ? (
        <div className="mt-[10px] flex gap-2 sm:mt-0">
          <CommonButton
            variant="outline"
            size="lg"
            className="h-11 w-1/2 sm:w-[115px]"
            // onClick={handleCancleBtnClick}
          >
            취소하기
          </CommonButton>
          <CommonButton
            variant="default"
            size="lg"
            className="h-11 w-1/2 sm:w-[115px]"
            // onClick={handleShareBtnClick}
          >
            공유하기
          </CommonButton>
        </div>
      ) : (
        <CommonButton
          variant="default"
          size="lg"
          className="h-11 w-[115px]"
          // onClick={handleJoinBtnClick}
        >
          참여하기
        </CommonButton>
      )}
    </>
  );
}
