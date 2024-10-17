import Image from 'next/image';

export default function ReviewBanner() {
  return (
    <div className="flex w-full justify-center bg-white">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/relax-together.appspot.com/o/images%2Freview-banner-sm.svg?alt=media&token=efe6d0d3-96c1-4fbd-a145-232919b02fce"
        alt="Review sm banner"
        width={375}
        height={112}
        priority
        className="md:hidden"
      />
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/relax-together.appspot.com/o/images%2Freview-banner-md.svg?alt=media&token=e01eb7fa-11c8-41c3-afb4-485d2993cdff"
        alt="Review md banner"
        width={744}
        height={132}
        priority
        className="hidden md:block lg:hidden"
      />
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/relax-together.appspot.com/o/images%2Freview-banner-lg.svg?alt=media&token=0f7bfcba-6b8b-45b6-81a0-80e038a57e1d"
        alt="Review lg banner"
        width={996}
        height={182}
        priority
        className="hidden lg:block"
      />
    </div>
  );
}
