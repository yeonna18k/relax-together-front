'use client';

import CommonButton from '../../common-button';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DeleteModal({ isOpen, onClose }: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="relative left-[20px] top-[20px] flex h-[212px] w-[450px] items-center justify-center rounded-xl bg-white shadow-md"
    >
      <div className="px-6 py-6">
        <div className="flex justify-end">
          <img
            src="/assets/close-button.svg"
            alt="close-button"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="mt-6">
          <div className="h-[48px] w-[402px] text-center text-base font-medium text-gray-900">
            <p>정말 나가시겠어요?</p>
            <p>작성된 내용이 모두 삭제됩니다.</p>
          </div>

          <div className="mt-6 flex justify-center space-x-4">
            <CommonButton size="sm" variant="outlined" onClick={onClose}>
              취소
            </CommonButton>
            <CommonButton size="sm" variant="default">
              확인
            </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
}
