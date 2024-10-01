import { ParticipantListTypes } from '@/entities/gatherings-detail/model/information';
import FloatingBarBtn from './FloatingBarBtn';
import FloatingBarText from './FloatingBarText';

export interface BottomFloatingBarProps {
  id: string;
  isHost: boolean;
  participantList: ParticipantListTypes;
}

export default function BottomFloatingBar({
  id,
  isHost,
  participantList,
}: BottomFloatingBarProps) {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 w-full border-t-2 border-green-600 bg-white sm:h-[84px] ${isHost ? 'h-[134px]' : 'h-[96px]'}`}
    >
      <div
        className={`mx-auto h-full w-full items-center justify-between gap-6 px-4 py-5 sm:gap-0 sm:px-6 sm:py-5 lg:max-w-[996px] ${isHost ? 'sm:flex' : 'flex'}`}
      >
        <FloatingBarText isHost={isHost} />
        <FloatingBarBtn
          id={id}
          isHost={isHost}
          participantList={participantList}
        />
      </div>
    </div>
  );
}
