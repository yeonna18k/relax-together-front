import BannerText from '@/entities/gatherings/ui/main/BannerText';
import SlideTabs from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import { commonTabs } from '@/shared/fixture/tabs';
import { Path } from '@/shared/lib/constants';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="z-30 hidden h-[549px] w-full xl:block">
      <div className="mt-[103.5px] flex h-[356px] w-full items-center justify-center">
        <div className="relative flex w-full flex-col items-center bg-transparent">
          <Image
            src="/assets/gathering-logo.svg"
            alt="로고 이미지"
            width={150}
            height={28}
          />
          <BannerText />

          <SlideTabs
            tabs={commonTabs}
            path={Path.GATHERINGS}
            variant={Path.GATHERINGS}
          />
        </div>
      </div>
    </div>
  );
}
