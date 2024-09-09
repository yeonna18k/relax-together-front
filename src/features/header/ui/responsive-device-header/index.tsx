import HamburgerBar from '@/features/header/ui/hamburger-bar';
import Logo from '@/features/header/ui/logo';
import TopTap from '@/features/header/ui/top-tap';

interface ResponsiveDeviceHeaderProps {
  onClick?: () => void;
}

export default function ResponsiveDeviceHeader({
  onClick,
}: ResponsiveDeviceHeaderProps) {
  return (
    <nav className="flex w-full items-center justify-between bg-transparent px-6 py-[12.5px] md:hidden">
      <HamburgerBar onClick={onClick} />
      <Logo />
      <TopTap path="/signin" name="로그인" className="" />
    </nav>
  );
}
