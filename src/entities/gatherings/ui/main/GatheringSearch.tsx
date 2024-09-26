'use client';
import SliderButtonContainer from '@/shared/common/ui/slider-button-container';
import Image from 'next/image';

export default function GatheringSearch() {
  return (
    <div className="text-black">
      <div className="flex flex-col items-center justify-center p-2 lg:p-10">
        <div className="flex w-full items-center justify-center gap-4 xl:flex-row">
          <Image
            src="/assets/gatherings-banner.png"
            alt="charactor"
            width={110}
            height={112}
            className="h-[112px] w-[110px] overflow-hidden xl:hidden"
          />

          <div className="flex flex-col items-center">
            <div className="-ml-5 text-sm font-medium text-green-800 md:-ml-20 xl:ml-0 2xl:text-xl">
              즐거운 모임을 찾고 계신가요?
            </div>
            <div className="font-semibold text-gray-900 max-xs:text-lg sm:text-2xl xl:mt-4 xl:text-3xl">
              지금 모임에 참여해보세요!
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center"></div>

      <div className="mx-2 flex items-center justify-between xl:hidden">
        <p className="text-[22px] font-bold">모임 찾기</p>
        <SliderButtonContainer size="small" />
      </div>
      <div className="w-[375px] border-t-2 border-gray-200 sm:w-[696px] lg:w-[996px]"></div>
    </div>
  );
}
