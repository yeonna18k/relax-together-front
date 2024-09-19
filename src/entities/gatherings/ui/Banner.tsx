import Image from 'next/image';
import BannerText from './BannerText';
import SliderButton from './SliderButton';

export default function Banner() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10 bg-no-repeat"></div>

      <div className="absolute left-1/2 top-1/2 flex w-[708px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-[20px] p-0">
        <Image
          src="/assets/gathering-logo.svg"
          alt="로고 이미지"
          width={150}
          height={28}
        />
        <BannerText />
        <SliderButton />
      </div>

      {/* 캐릭터 이미지들 배치 (주석 해제 가능) */}
      {/* <Image
        src="/assets/charactor.svg"
        alt="left charactor"
        width={231.75}
        height={460.35}
        className="absolute left-0 bottom-0 transform"
      />
      <Image
        src="/assets/charactor2.svg"
        alt="topRight charactor"
        width={288.23}
        height={207.04}
        className="absolute right-10 top-10 transform"
      />
      <Image
        src="/assets/charactor3.svg"
        alt="right charactor"
        width={345.82}
        height={283.02}
        className="absolute right-0 bottom-0 transform"
      /> */}
    </div>
  );
}
