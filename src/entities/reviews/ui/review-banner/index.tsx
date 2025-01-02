import Image from 'next/image';

export default function ReviewBanner() {
  return (
    <div className="flex w-full justify-center bg-white">
      <Image
        src="https://wfftvdtsykljejnuzibc.supabase.co/storage/v1/object/public/relax-together/review-banner-sm.png"
        alt="Review sm banner"
        width={375}
        height={112}
        priority
        className="md:hidden"
      />
      <Image
        src="https://wfftvdtsykljejnuzibc.supabase.co/storage/v1/object/public/relax-together/review-banner-md.png"
        alt="Review md banner"
        width={744}
        height={132}
        priority
        className="hidden md:block lg:hidden"
      />
      <Image
        src="https://wfftvdtsykljejnuzibc.supabase.co/storage/v1/object/public/relax-together/review-banner-lg.png"
        alt="Review lg banner"
        width={996}
        height={182}
        priority
        className="hidden lg:block"
      />
    </div>
  );
}
