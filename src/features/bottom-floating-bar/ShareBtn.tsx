import CommonButton from '@/shared/common/ui/common-button';

export default function ShareBtn() {
  // const handleShareBtnClick = () => {};

  return (
    <CommonButton
      variant="default"
      size="lg"
      className="h-11 w-1/2 sm:w-[115px]"
      // onClick={handleShareBtnClick}
    >
      공유하기
    </CommonButton>
  );
}
