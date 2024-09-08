'use client';

import CommonButton from '../../common-button';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="relative left-[20px] top-[20px] flex h-[199px] w-[300px] items-center justify-center rounded-xl bg-white shadow-md"
    >
      <div className="px-6 py-6">
        <div className="absolute right-6 top-6">
          <img
            src="/assets/close-button.svg"
            alt="close-button"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="mt-6">
          <div className="h-[48px] w-[300px] text-center text-base font-medium text-gray-900">
            <p>가입이 완료되었습니다!</p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <CommonButton size="sm" variant="outlined" onClick={onClose}>
              취소
            </CommonButton>
            <CommonButton size="sm" variant="default" onClick={onClose}>
              확인
            </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
}
