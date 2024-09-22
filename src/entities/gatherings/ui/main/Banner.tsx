import BannerText from '@/entities/gatherings/ui/main/BannerText';
import SliderButtonContainer from '@/shared/common/ui/slider-button-container';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="max-[xl]:block z-30 hidden h-[549.5px] w-full xl:block">
      <div className="mt-[103.5px] flex h-[356px] w-full items-center justify-center">
        <div className="flex w-full flex-col items-center">
          <Image
            src="/assets/gathering-logo.svg"
            alt="로고 이미지"
            width={150}
            height={28}
          />
          <BannerText />

          <SliderButtonContainer />
        </div>
      </div>
    </div>
  );
}
