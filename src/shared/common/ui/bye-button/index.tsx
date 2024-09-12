'use client';
import ByeIcon from '@/shared/assets/icons/bye-icon';
import { Button } from '@/shared/ui/button';

export default function ByeButton() {
  //NOTE: 모임 취소 api랑 연동해서 모임 취소하는 기능 추가
  return (
    <Button className="flex h-9 w-[116px] items-center justify-between rounded-xl border-orange-50 bg-orange-50 px-3 py-1.5 hover:bg-orange-50 active:bg-orange-50 md:h-12 md:w-12 md:rounded-full md:p-3">
      <ByeIcon className="h-6 w-6" />
      <p className="block text-xs font-semibold text-orange-600 md:hidden">
        모임 보내주기
      </p>
    </Button>
  );
}
