import Image from 'next/image';

export default function BannerBackground() {
  return (
    <div className="absolute left-0 top-0 z-20 hidden h-[635px] w-full xl:flex xl:justify-center">
      <Image
        className="h-auto w-full object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/relax-together.appspot.com/o/images%2Fgathering-no-bg.png?alt=media&token=002db5da-62ef-48fa-9667-bfd0113c342c"
        alt="Background image"
        width={1200}
        height={635}
        priority
      />
    </div>
  );
}
