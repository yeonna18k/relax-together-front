'use client';
import DesktopHeader from '@/features/header/ui/desktop-header';
import NavList from '@/features/header/ui/nav-list';
import ResponsiveDeviceHeader from '@/features/header/ui/responsive-device-header';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="relative">
      <div className="z-20 h-[60px] w-full border-b-2 border-black bg-orange-600">
        {/* Desktop Header */}
        <DesktopHeader />
        {/* Responsive Device Header */}
        <ResponsiveDeviceHeader onClick={() => setIsMenuOpen(prev => !prev)} />
      </div>
      {/* Responsive Device Menu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        className="absolute left-0 right-0 top-[60px] z-10 h-screen bg-black/50"
        onClick={() => setIsMenuOpen(false)}
      >
        <motion.div
          animate={{
            transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 right-0 top-0 w-full rounded-b-lg bg-white px-[26px] pb-[45px] pt-5"
        >
          <NavList />
        </motion.div>
      </motion.div>
    </header>
  );
}
