'use client';
import DesktopHeader from '@/features/header/ui/desktop-header';
import NavList from '@/features/header/ui/nav-list';
import ResponsiveDeviceHeader from '@/features/header/ui/responsive-device-header';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="relative">
      <div className="h-[60px] w-full border-b-2 border-black bg-orange-600">
        {/* Desktop Header */}
        <DesktopHeader />
        {/* Responsive Device Header */}
        <ResponsiveDeviceHeader onClick={() => setIsMenuOpen(prev => !prev)} />
      </div>
      {/* Responsive Device Menu */}
      {isMenuOpen && (
        <div
          className="absolute left-0 right-0 top-[60px] z-10 h-screen bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="fixed left-0 right-0 top-[60px] z-20 w-full transform rounded-b-lg bg-white px-[26px] pb-[45px] pt-5">
            <NavList />
          </div>
        </div>
      )}
    </header>
  );
}
