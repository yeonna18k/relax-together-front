import Logo from '@/features/header/ui/logo';
import NavList from '@/features/header/ui/nav-list';
import TopTap from '@/features/header/ui/top-tap';

export default function DesktopHeader() {
  return (
    <nav className="mx-auto hidden w-full items-center justify-between bg-transparent py-[12.5px] md:flex xl:max-w-[1200px]">
      <div className="flex items-center gap-6">
        <Logo />
        <NavList />
      </div>
      <TopTap path="/signin" name="로그인" />
    </nav>
  );
}
