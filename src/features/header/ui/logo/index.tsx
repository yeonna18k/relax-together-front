import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  //TODO: user agent를 통해 사용자의 디바이스를 판별하는 로직이 필요합니다.
  return (
    <Link href="/gatherings">
      <Image
        priority
        src={'/assets/logo-large.svg'}
        alt="같이 달램"
        width={73}
        height={35}
      />
    </Link>
  );
}
