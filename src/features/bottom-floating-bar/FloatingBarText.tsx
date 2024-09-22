import { BottomFloatingBarProps } from '.';

export default function FloatingBarText({ isHost }: BottomFloatingBarProps) {
  return (
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
  );
}
