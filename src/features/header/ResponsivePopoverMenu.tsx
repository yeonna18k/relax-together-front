'use client';

import HamburgerBar from '@/features/header/HamburgerBar';
import NavList from '@/features/header/NavList';
import PopoverBackdrop from '@/features/header/PopoverBackdrop';
import TopTap from '@/features/header/top-tap';
import { useResponsiveGNBPopoverStore } from '@/shared/store/useResponsiveGNBPopoverStore';
import { Popover, PopoverContent } from '@/shared/ui/popover';

export default function ResponsivePopoverMenu() {
  const { isOpen, setIsOpen } = useResponsiveGNBPopoverStore();
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <HamburgerBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <PopoverBackdrop isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <PopoverContent
        className="flex w-screen flex-col gap-2.5 rounded-xl rounded-t-none bg-white px-[26px] pb-10 pt-0"
        side="top"
        sideOffset={18}
      >
        {/* TODO: 비회원, 로그인 회원 구분해서 화면 처리할 것 */}
        <TopTap
          path="/signin"
          name="로그인이 필요합니다."
          className="py-4 text-gray-400"
        />
        {/* <ResponsiveLoginUser name="홍길동" /> */}
        <NavList />
      </PopoverContent>
    </Popover>
  );
}
