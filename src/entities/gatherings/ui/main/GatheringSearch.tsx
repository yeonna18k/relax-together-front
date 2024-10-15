'use client';
import SlideTabs from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import { commonTabs } from '@/shared/fixture/tabs';
import { Path } from '@/shared/lib/constants';
import Image from 'next/image';

export default function GatheringSearch() {
  return (
    <div className="relative w-full text-black xl:max-w-[996px]">
      <div className="flex flex-col items-center justify-center p-2 lg:p-10">
        <div className="flex w-full items-center justify-center gap-4 xl:flex-row">
          <Image
            src="/assets/gatherings-banner.png"
            alt="charactor"
            width={110}
            height={112}
            className="h-[112px] w-[110px] overflow-hidden xl:hidden"
          />

          <div className="flex flex-col items-start xl:items-center">
            <div className="text-sm font-medium text-green-800 xl:text-xl">
              즐거운 모임을 찾고 계신가요?
            </div>
            <div className="text-lg font-semibold text-gray-900 md:text-2xl xl:mt-4 xl:text-3xl">
              지금 모임에 참여해보세요!
            </div>
          </div>
        </div>
      </div>

      <div className="mx-2 flex items-center justify-between xl:hidden">
        <p className="text-[22px] font-bold">모임 찾기</p>
        <SlideTabs
          tabs={commonTabs}
          path={Path.GATHERINGS}
          variant={Path.GATHERINGS}
        />
      </div>
      <div className="absolute bottom-0 z-10 w-full border-t border-gray-200 xl:max-w-[996px]" />
    </div>
  );
}
