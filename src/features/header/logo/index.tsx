import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/gatherings" aria-label="모임찾기로 이동">
      <div className="item-center flex gap-2 lg:w-[124px]">
        <Image
          className="h-5 w-5 lg:h-[26px] lg:w-[27px]"
          priority
          src={'/assets/logo-icon.svg'}
          alt="logo-icon"
          width={27}
          height={26}
          draggable="false"
        />
        <Image
          className="h-5 w-[68px] lg:h-[26px] lg:w-[89px]"
          priority
          src={'/assets/logo-text.svg'}
          alt="logo-text"
          width={89}
          height={26}
          draggable="false"
        />
      </div>
    </Link>
  );
}
