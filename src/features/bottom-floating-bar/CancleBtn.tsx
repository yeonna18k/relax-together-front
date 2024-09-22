import CommonButton from '@/shared/common/ui/common-button';

export default function CancleBtn() {
  // const handleCancleBtnClick = () => {};

  return (
    <CommonButton
      variant="outline"
      size="lg"
      className="h-11 w-1/2 sm:w-[115px]"
      // onClick={handleCancleBtnClick}
    >
      취소하기
    </CommonButton>
  );
}
