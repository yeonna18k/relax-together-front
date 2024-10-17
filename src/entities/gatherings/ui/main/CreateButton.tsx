'use client';
import { useModal } from '@/shared/hooks/useModal';
import { ModalType } from '@/shared/lib/constants';
import { useUserDataStore } from '@/shared/store/useUserDataStore';
import Image from 'next/image';

export default function CreateButton() {
  const { openModal } = useModal();
  const user = useUserDataStore(state => state.user);

  return user ? (
    <div className="fixed bottom-[26px] left-[5px] z-40 lg:bottom-[45px] lg:left-[50px] xl:bottom-[68px] xl:left-[100px]">
      <button
        className="flex h-[52px] w-[158px] items-center justify-center gap-2 rounded-full bg-[#FF3D61] text-lg font-semibold text-white transition-all duration-300 hover:bg-[#e63255] lg:h-[72px] lg:w-[222px] lg:text-2xl xl:h-[92px] xl:w-[282px] xl:text-[32px]"
        onClick={() => openModal(ModalType.CREATE_GATHERING)}
      >
        <span>모임 만들기</span>
        <Image
          src="/assets/red-logo.svg"
          alt="arrow-right"
          width={18}
          height={18}
          className="h-[18px] w-[18px] lg:h-9 lg:w-9"
        />
      </button>
    </div>
  ) : (
    <></>
  );
}
