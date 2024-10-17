'use client';

import useDeviceType from '@/shared/hooks/useDeviceType';
import { DeviceType } from '@/shared/lib/constants/viewport';
import Image from 'next/image';

export default function LikeGatheringsBanner() {
  const { deviceType } = useDeviceType();

  const widthValue =
    deviceType === DeviceType.MOBILE
      ? 107
      : deviceType === DeviceType.TABLET
        ? 130
        : 170;

  const heightValue =
    deviceType === DeviceType.MOBILE
      ? 83
      : deviceType === DeviceType.TABLET
        ? 101
        : 122;

  return (
    <div className="flex h-[112px] items-center justify-center gap-1 bg-white sm:h-[132px] sm:gap-6 lg:relative lg:h-[182px] lg:gap-0 lg:bg-transparent">
      <Image
        src="/assets/like-gatherings-banner.svg"
        alt="배너 일러스트 이미지"
        width={widthValue}
        height={heightValue}
        className="lg:absolute lg:left-[46px] lg:top-1/2 lg:-translate-y-1/2"
      />
      <div>
        <p className="text-sm font-medium text-green-800 lg:text-xl">
          마감되기 전에 지금 바로 참여해보세요 👀
        </p>
        <p className="mt-[2px] text-lg font-semibold text-gray-900 sm:text-2xl lg:mt-3 lg:text-3xl">
          찜한 모임이 모두 모여 있어요!
        </p>
      </div>
    </div>
  );
}
