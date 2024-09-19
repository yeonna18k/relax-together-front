import Image from 'next/image';
import BannerText from './BannerText';
import SliderButton from './SliderButton';

export default function Banner() {
  return (
    <div className="relative mt-20 hidden h-[356px] w-full items-center justify-center lg:flex">
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
      <Image
        src="/assets/charactor.svg"
        alt="left charactor"
        width={231.75}
        height={460.35}
        className="absolute -left-[340px] top-[300px] -translate-x-1/2 -translate-y-1/2 transform"
      />
      <Image
        src="/assets/charactor2.svg"
        alt="topRight charactor"
        width={288.23}
        height={207.04}
        className="absolute -right-[300px] top-10 -translate-x-1/2 -translate-y-1/2 transform"
      />
      <Image
        src="/assets/charactor3.svg"
        alt="right charactor"
        width={345.82}
        height={283.02}
        className="absolute -right-[600px] top-[420px] -translate-x-1/2 -translate-y-1/2 transform"
      />
    </div>
  );
}
