'use client';
import GatheringCardLogo from '@/shared/assets/icons/gatherings-card-logo.svg';
import RightButtonIcon from '@/shared/assets/icons/right-button.svg';
import { Button } from '@/shared/ui/button';

export default function GatheringSearch() {
  return (
    <div className="flex justify-center text-black xl:w-[966px]">
      <div className="mt-28 flex w-full items-center justify-between border-b-2 border-gray-200 px-6 py-10">
        <div className="flex gap-4">
          <GatheringCardLogo />
          <div className="flex flex-col gap-3">
            <div className="text-xl text-green-800">함께 할 사람이 없나요?</div>
            <div className="text-3xl font-semibold text-gray-900">
              지금 모임에 참여해보세요!
            </div>
          </div>
        </div>
        <Button variant="ghost" className="w-[34px] p-0">
          <RightButtonIcon />
        </Button>
      </div>
    </div>
  );
}
