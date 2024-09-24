'use client';
import SliderButtonContainer from '@/shared/common/ui/slider-button-container';
import Image from 'next/image';

export default function GatheringSearch() {
  return (
    <div className="text-black">
      <div className="flex flex-col items-center justify-center p-2 lg:p-10">
        <div className="flex w-full items-center justify-center gap-10 xl:flex-row">
          <Image
            src="/assets/charactor.svg"
            alt="charactor"
            width={110}
            height={112}
            className="h-[112px] w-[110px] overflow-hidden xl:hidden"
          />

          <div className="flex flex-col items-center justify-center">
            <div className="font-medium text-green-800 max-xs:-ml-5 max-xs:text-sm 2xl:text-xl">
              즐거운 모임을 찾고 계신가요?
            </div>
            <div className="font-semibold text-gray-900 max-xs:text-lg sm:text-2xl xl:mt-4 xl:text-3xl">
              지금 모임에 참여해보세요!
            </div>
          </div>
        </div>
      </div>

      <div className="m-0 flex justify-center py-0"></div>

      <div className="mx-auto flex items-center justify-between sm:px-6 xl:hidden">
        <p className="text-2xl font-bold">모임찾기</p>
        <SliderButtonContainer size="small" />
      </div>
      <div className="border-t-2 border-gray-200 max-xs:w-[375px] sm:w-[696px] md:w-[696px] lg:w-[966px] xl:w-[966px] 2xl:w-[966px]"></div>
    </div>
  );
}
