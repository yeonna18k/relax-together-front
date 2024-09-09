'use client';
import HamburgerBar from '@/features/header/ui/hamburger-bar';
import Logo from '@/features/header/ui/logo';
import TopTap from '@/features/header/ui/top-tap';
import { usePathname } from 'next/navigation';

interface ResponsiveDeviceHeaderProps {
  onClick?: () => void;
}

export default function ResponsiveDeviceHeader({
  onClick,
}: ResponsiveDeviceHeaderProps) {
  const currentPathName = usePathname();
  return (
    <nav className="flex w-full items-center justify-between bg-transparent px-6 py-[12.5px] md:hidden">
      <HamburgerBar onClick={onClick} />
      <Logo />
      <TopTap
        path="/signin"
        name="로그인"
        className={`text-white hover:text-gray-900 md:text-gray-900 hover:md:text-orange-600 ${currentPathName === '/signin' ? 'text-gray-900 md:text-orange-600' : ''}`}
      />
    </nav>
  );
}
