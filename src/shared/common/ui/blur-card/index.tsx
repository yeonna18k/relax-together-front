import { MyGathering } from '@/entities/mypage/model';
import ByeButton from '@/shared/common/ui/bye-button';
import useLeaveGatheringsById from '@/shared/hooks/useLeaveGatheringsById';
import Link from 'next/link';

const defaultStyle =
  'absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 rounded-md p-6 xs:flex-row xs:items-start xs:justify-between md:rounded-xl';
export default function CommonBlurCard({
  id,
  status = 'ONGOING',
}: Pick<MyGathering, 'id' | 'status'>) {
  const { handleSubmit } = useLeaveGatheringsById(id);

  return status === 'CANCELLED' ? (
    <div className={`${defaultStyle} bg-black/80`}>
      <div className="hidden xs:block xs:h-12 xs:w-12" />
      <div className="flex flex-col items-center justify-center gap-2 xs:h-full">
        <p className="text-sm text-white">모집 취소된 모임이에요.</p>
        <p className="text-sm text-white">다음 기회에 만나요 🙏</p>
      </div>
      <div className="flex w-full justify-center xs:block xs:h-12 xs:w-12">
        <ByeButton onClick={handleSubmit} />
      </div>
    </div>
  ) : (
    <Link
      href={`/gatherings/${id}`}
      className={`${defaultStyle}`}
      aria-label={`모임 ${id} 상세 페이지로 이동`}
    />
  );
}
