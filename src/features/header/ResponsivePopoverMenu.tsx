'use client';

import HamburgerBar from '@/features/header/HamburgerBar';
import NavList from '@/features/header/NavList';
import PopoverBackdrop from '@/features/header/PopoverBackdrop';
import TopTap from '@/features/header/top-tap';
import LogoutButton from '@/shared/common/ui/logout-button';
import { Device } from '@/shared/lib/constants';
import { useResponsiveGNBPopoverStore } from '@/shared/store/useResponsiveGNBPopoverStore';
import { useUserDataStore } from '@/shared/store/useUserDataStore';
import { Popover, PopoverContent } from '@/shared/ui/popover';
import { useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';
import ResponsiveLoginUser from './ResponsiveLoginUser';

export default function ResponsivePopoverMenu() {
  const { isOpen, setIsOpen } = useResponsiveGNBPopoverStore();
  const user = useUserDataStore(state => state.user);

  const { width } = useWindowSize();
  useEffect(() => {
    width > Device.tablet && setIsOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <HamburgerBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <PopoverBackdrop isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <PopoverContent
        className="flex w-screen flex-col gap-2.5 rounded-xl rounded-t-none bg-white px-[26px] pb-10 pt-0"
        side="top"
        sideOffset={18}
      >
        {user ? (
          <ResponsiveLoginUser name={user.name} />
        ) : (
          <TopTap
            path="/signin"
            name="로그인이 필요합니다."
            className="group flex w-full items-center justify-between py-4 text-gray-400"
          />
        )}
        <NavList />
        {user && (
          <LogoutButton className="mt-2.5 rounded-none border-t border-gray-200 py-4 no-underline" />
        )}
      </PopoverContent>
    </Popover>
  );
}
