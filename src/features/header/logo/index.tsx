import LogoImage from '@/shared/common/ui/logo-image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/gatherings" aria-label="모임찾기로 이동">
      <LogoImage />
    </Link>
  );
}
