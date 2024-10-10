import BannerLg from '@/shared/assets/review-banner-lg.svg';
import BannerMd from '@/shared/assets/review-banner-md.svg';
import BannerSm from '@/shared/assets/review-banner-sm.svg';

export default function ReviewBanner() {
  return (
    <div className="flex w-full justify-center bg-white">
      <BannerSm className="md:hidden" />
      <BannerMd className="hidden md:block lg:hidden" />
      <BannerLg className="hidden lg:block" />
    </div>
  );
}
