'use client';

import LoginUser from '@/features/header/LoginUser';
import Logo from '@/features/header/logo';
import NavList from '@/features/header/NavList';
import ResponsivePopoverMenu from '@/features/header/ResponsivePopoverMenu';
import TopTap from '@/features/header/top-tap';
import { useUserDataStore } from '@/shared/store/useUserDataStore';

export default function Header() {
  const user = useUserDataStore(state => state.user);
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="relative z-50 mx-auto flex h-[56px] w-full justify-between bg-transparent px-4 py-[18px] lg:h-[70px] lg:gap-[50px] lg:py-[22px] xl:max-w-[1200px] xl:px-2.5">
        <Logo />
        <div className="hidden items-center justify-between lg:flex lg:w-full">
          <NavList />
          {user ? (
            <LoginUser name={user.name} />
          ) : (
            <TopTap path="/signin" name="로그인" />
          )}
        </div>
        <ResponsivePopoverMenu />
      </nav>
    </header>
  );
}
