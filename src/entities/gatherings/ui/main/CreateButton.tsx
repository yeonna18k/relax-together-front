'use client';
import { useModal } from '@/shared/hooks/useModal';
import Image from 'next/image';

export default function CreateButton() {
  const { openModal } = useModal();
  return (
    <div className="fixed bottom-[26px] left-[5px] z-40 xl:bottom-[68px] xl:left-[100px]">
      <button
        className="flex h-[52px] w-[158px] items-center justify-center gap-2 rounded-full bg-[#FF3D61] text-[18px] font-semibold text-white transition-all duration-300 hover:bg-[#e63255] lg:h-[92px] lg:w-[282px] lg:text-[32px]"
        onClick={() => openModal('createGathering')}
      >
        <span>모임 만들기</span>
        <Image
          src="/assets/red-logo.svg"
          alt="arrow-right"
          width={18}
          height={18}
          className="lg:h-[36px] lg:w-[36px]"
        />
      </button>
    </div>
  );
}
