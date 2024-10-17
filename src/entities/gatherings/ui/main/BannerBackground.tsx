import Image from 'next/image';

export default function BannerBackground() {
  return (
    <div className="absolute left-0 top-0 z-20 hidden h-[635px] w-full xl:flex xl:justify-center">
      <Image
        className="h-auto w-full object-contain"
        src="/assets/gathering-no-bg.png"
        alt="Background image"
        width={1200}
        height={635}
        priority
      />
    </div>
  );
}
