'use client';
import SliderButtonContainer from '@/shared/common/ui/slider-button-container';
import Image from 'next/image';

export default function GatheringSearch() {
  return (
    <div className="text-black">
      <div className="flex flex-col items-center justify-center p-10">
        <div className="flex w-full items-center justify-center xl:flex-row">
          <div className="relative h-[132px] w-[150px] overflow-hidden xl:hidden">
            <Image
              src="/assets/charactor.svg"
              alt="charactor"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-lg font-medium text-green-800">
              즐거운 모임을 찾고 계신가요?
            </div>
            <div className="p-4 text-3xl font-semibold text-gray-900">
              지금 모임에 참여해보세요!
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center"></div>

      <div className="mx-auto mt-4 flex items-center justify-between xl:hidden">
        <p className="text-2xl font-bold">모임찾기</p>
        <SliderButtonContainer size="small" />
      </div>
      <div className="border-t-2 border-gray-200 max-xs:w-[375px] xs:w-[696px] sm:w-[696px] md:w-[696px] lg:w-[696px] 2xl:w-[966px]"></div>
    </div>
  );
}
