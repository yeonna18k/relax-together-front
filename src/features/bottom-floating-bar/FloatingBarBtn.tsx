import { BottomFloatingBarProps } from '.';
import CancleBtn from './CancleBtn';
import JoinBtn from './JoinBtn';
import ShareBtn from './ShareBtn';

export default function FloatingBarBtn({ isHost }: BottomFloatingBarProps) {
  return (
    <>
      {isHost ? (
        <div className="mt-[10px] flex gap-2 sm:mt-0">
          <CancleBtn />
          <ShareBtn />
        </div>
      ) : (
        <JoinBtn />
      )}
    </>
  );
}
