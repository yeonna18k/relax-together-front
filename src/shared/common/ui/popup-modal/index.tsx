'use client';

import { useState } from 'react';
import CommonButton from '../common-button';

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative left-[20px] top-[20px] flex h-[212px] w-[450px] flex-col items-center justify-center rounded-xl bg-slate-200"
      >
        <div className="px-6 py-6">
          <div className="child absolute right-6 top-6">
            <img
              src="/assets/close-button.svg"
              alt="close-button"
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <div className="mt-6">
            <div className="order-1 h-[48px] w-[402px] flex-none flex-grow-0 text-center text-base font-medium text-gray-900">
              <p>정말 나가시겠어요?</p>
              <p>작성된 내용이 모두 삭제됩니다.</p>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <CommonButton
                size="sm"
                variant="default"
                onClick={() => setIsOpen(false)}
              >
                취소
              </CommonButton>
              <CommonButton size="sm" variant="default">
                확인
              </CommonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
