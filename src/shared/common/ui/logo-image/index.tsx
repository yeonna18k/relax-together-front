import Image from 'next/image';

export default function LogoImage() {
  return (
    <Image
      className="h-5 w-[103px] lg:h-[26px] lg:w-[134px]"
      priority
      src={'/assets/relax-together-logo.svg'}
      alt="relax-together-logo"
      width={134}
      height={26}
      draggable="false"
    />
  );
}
