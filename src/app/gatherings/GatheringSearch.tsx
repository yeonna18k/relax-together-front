'use client';

import Image from 'next/image';

export default function GatheringSearch() {
  return (
    <div className="text-black">
      <div className="relative mt-28 h-[162px] w-[996px] bg-white before:absolute before:bottom-0 before:h-[2px] before:w-full before:bg-gray-200">
        <Image
          src="/assets/gatherings-card-logo.svg"
          alt="gatherings-card-logo"
          width={82}
          height={82}
          className="relative left-4 top-1/2 -translate-y-1/2"
        />

        <div className="absolute left-28 top-1/2 flex -translate-y-1/2 flex-col gap-3">
          <div className="medium text-xl text-green-800">
            함께 할 사람이 없나요?
          </div>
          <div className="text-3xl font-semibold text-[#222222]">
            지금 모임에 참여해보세요!
          </div>
        </div>
        <Image
          src="/assets/right-button.svg"
          alt="right-button"
          width={34}
          height={34}
          className="text-grayscale-900 absolute right-0 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
