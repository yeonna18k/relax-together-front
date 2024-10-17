'use client';

import useDeviceType from '@/shared/hooks/useDeviceType';
import { DeviceType } from '@/shared/lib/constants/viewport';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  const { deviceType } = useDeviceType();

  const gifSize = deviceType === DeviceType.MOBILE ? 94 : 144;
  const widthValue = deviceType === DeviceType.MOBILE ? 101 : 184;
  const heightValue = deviceType === DeviceType.MOBILE ? 38 : 68;

  return (
    <div className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-center text-center text-gray-900 lg:min-h-[calc(100vh-71px)]">
      <div>
        <Image
          src="/assets/face-in-clouds.gif"
          alt="face in clouds gif"
          width={gifSize}
          height={gifSize}
          className="mx-auto"
          priority
        />
        <Image
          src="/assets/404.svg"
          alt="404 이미지"
          width={widthValue}
          height={heightValue}
          className="mt-2.5"
        />
      </div>
      <div className="mt-10 sm:mt-[60px] lg:mt-[66px]">
        <h1 className="text-[18px] font-bold sm:text-[28px] lg:text-[34px]">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-2.5 text-xs leading-5 text-gray-600 sm:mt-5 sm:text-lg sm:leading-7 lg:mt-4 lg:text-xl lg:leading-8">
          페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />
          입력하신 주소가 정확한지 다시 한 번 확인해주세요.
        </p>
      </div>
      <Link
        href="/"
        className="fixed bottom-[30px] mt-[60px] w-[332px] rounded-md border border-green-600 py-[9px] font-semibold text-green-600 sm:static"
        aria-label="메인으로 돌아가기"
      >
        메인으로 돌아가기
      </Link>
    </div>
  );
}
