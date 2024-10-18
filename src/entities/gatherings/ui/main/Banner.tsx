import BannerText from '@/entities/gatherings/ui/main/BannerText';
import SlideTabs from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import LogoImage from '@/shared/common/ui/logo-image';
import { commonTabs } from '@/shared/fixture/tabs';
import { Path } from '@/shared/lib/constants';

export default function Banner() {
  return (
    <div className="z-30 hidden h-[549px] w-full xl:block">
      <div className="mt-[103.5px] flex h-[356px] w-full items-center justify-center">
        <div className="relative flex w-full flex-col items-center bg-transparent">
          <LogoImage />
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
