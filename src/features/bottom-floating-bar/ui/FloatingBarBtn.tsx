import { BottomFloatingBarProps } from '.';
import CancleBtn from './CancleBtn';
import JoinBtn from './JoinBtn';
import ShareBtn from './ShareBtn';

export default function FloatingBarBtn({
  id,
  isHost,
  gatheringsInfo,
  participantList,
}: BottomFloatingBarProps) {
  return (
    <>
      {isHost ? (
        <div className="mt-[10px] flex gap-2 sm:mt-0">
          <CancleBtn id={id} gatheringsInfo={gatheringsInfo} />
          <ShareBtn />
        </div>
      ) : (
        <JoinBtn
          id={id}
          gatheringsInfo={gatheringsInfo}
          participantList={participantList}
        />
      )}
    </>
  );
}
