'use client';

import Image from 'next/image';

export default function Banner() {
  return (
    <div className="mt-36 flex h-1/4 w-full items-center justify-center">
      <div className="left-[606px] top-[174px] flex h-[356px] w-[708px] flex-col items-center gap-[20px] p-0">
        <div>
          <Image
            src="/assets/Gathering-logo.svg"
            alt="로고 이미지"
            width={150}
            height={28}
          />
        </div>
        <div className="h-[180px] w-[708px] text-center font-[Paperlogy] text-[64px] uppercase leading-[140%] tracking-[0.01em] text-[#222222]">
          <h1>바쁜 일상 속, 잠시 휴식과</h1>
          <h1>따뜻한 모임이 필요할 때.</h1>
        </div>
      </div>
    </div>
  );
}
