import CommonButton from '@/shared/common/ui/common-button';

interface BottomFloatingBarProps {
  isHost: boolean;
}

export default function BottomFloatingBar({ isHost }: BottomFloatingBarProps) {
  // const handleJoinBtnClick = () => {};

  // const handleCancleBtnClick = () => {};

  // const handleShareBtnClick = () => {};

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 w-full border-t-2 border-green-600 bg-white sm:h-[84px] ${isHost ? 'h-[134px]' : 'h-[96px]'}`}
      >
        <div
          className={`mx-auto h-full w-full items-center justify-between gap-6 px-4 py-5 sm:gap-0 sm:px-6 sm:py-5 lg:max-w-[996px] ${isHost ? 'sm:flex' : 'flex'}`}
        >
          <div className="flex flex-col gap-1">
            <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
              더 건강한 나와 팀을 위한 프로그램 🏃
            </h3>
            <span className="text-xs font-medium text-gray-700">
              {isHost
                ? '모임을 공유해서 더 많은 사람들이 참여할 수 있도록 독려해봐요'
                : '국내 최고 웰니스 전문가와 프로그램을 통해 지친 몸과 마음을 회복해봐요'}
            </span>
          </div>
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
        </div>
      </div>
    </>
  );
}
