'use client';
import SliderButtonContainer from '@/shared/common/ui/slider-button-container';
import Image from 'next/image';

export default function GatheringSearch() {
  return (
    <div className="text-black">
      <div className="flex flex-col items-center justify-center p-10">
        {/* 이미지와 텍스트를 감싸는 컨테이너 */}
        <div className="flex w-full items-center justify-center xl:flex-row">
          {/* 이미지: 작은 화면에서만 보임, 큰 화면에서는 숨김 */}
          <div className="relative h-[132px] w-[150px] overflow-hidden xl:hidden">
            <Image
              src="/assets/charactor.svg"
              alt="charactor"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          {/* 텍스트 컨테이너: 항상 중앙 정렬 */}
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

      {/* 중앙 정렬된 보더 */}
      <div className="flex justify-center">
        <div className="w-[966px] border-t-2 border-gray-200 xl:w-auto"></div>
      </div>

      {/* 모임 찾기 섹션 */}
      <div className="mx-auto mt-4 flex items-center justify-between xl:hidden">
        <p className="text-2xl font-bold">모임찾기</p>
        <SliderButtonContainer size="small" />
      </div>
    </div>
  );
}
