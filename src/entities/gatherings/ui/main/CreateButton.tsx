'use client';
import Xmark from '@/shared/assets/icons/xmark.svg';
import Image from 'next/image';
import { useState } from 'react';
import GatheringModal from './GatheringModal';

export default function CreateButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="fixed bottom-[26px] left-[5px] z-40 xl:bottom-[68px] xl:left-[100px]">
        <button
          className="flex h-[52px] w-[158px] items-center justify-center gap-2 rounded-full bg-[#FF3D61] text-[18px] font-semibold text-white transition-all duration-300 hover:bg-[#e63255] lg:h-[92px] lg:w-[282px] lg:text-[32px]"
          onClick={openModal}
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

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[520px] rounded-lg bg-white p-6 max-xs:w-[375px]">
            <div className="-mt-2 mb-6 flex items-center justify-between">
              <h2 className="text-[18px] font-semibold">모임 만들기</h2>
              <Xmark className="stroke-gray-500 stroke-2 hover:stroke-gray-700" />
            </div>
            <GatheringModal />
            <button
              className="mt-4 h-11 w-[472px] rounded bg-gray-400 px-4 py-2 text-white max-xs:h-10 max-xs:w-[343px]"
              onClick={closeModal} // 닫기 버튼 클릭 시 모달 닫기
            >
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}
