import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import ByeButton from '@/shared/common/ui/bye-button';

export default function CommonBlurCard({ id }: Pick<MyGathering, 'id'>) {
  const handleByeButtonClick = () => {
    // TODO: 모임이 개설자에 의해 취소되었을 경우 모임 보내주기 버튼 클릭
  };
  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 rounded-md bg-black/80 p-6 xs:flex-row xs:items-start xs:justify-between md:rounded-xl">
      <div className="hidden xs:block xs:h-12 xs:w-12" />
      <div className="flex flex-col items-center justify-center gap-2 xs:h-full">
        <p className="text-sm text-white">모집 취소된 모임이에요.</p>
        <p className="text-sm text-white">다음 기회에 만나요 🙏</p>
      </div>
      <div className="flex w-full justify-center xs:block xs:h-12 xs:w-12">
        <ByeButton onClick={handleByeButtonClick} />
      </div>
    </div>
  );
}
