'use client';
import Logo from '@/features/header/logo';
import NavList from '@/features/header/NavList';
import ResponsivePopoverMenu from '@/features/header/ResponsivePopoverMenu';
import TopTap from '@/features/header/top-tap';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="relative z-50 mx-auto flex h-[56px] w-full justify-between bg-transparent px-4 py-[18px] lg:h-[70px] lg:gap-[50px] lg:px-0 lg:py-[22px] xl:max-w-[1200px]">
        <Logo />
        <div className="hidden items-center justify-between lg:flex lg:w-full">
          <NavList />
          {/* TODO: 비회원, 로그인 회원 구분해서 화면 처리할 것 */}
          <TopTap path="/signin" name="로그인" />
          {/* <LoginUser name="홍길동" /> */}
        </div>
        <ResponsivePopoverMenu />
      </nav>
    </header>
  );
}
