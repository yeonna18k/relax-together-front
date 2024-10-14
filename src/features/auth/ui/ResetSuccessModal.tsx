// ForgotSuccessModal.tsx
import React from 'react';

interface ForgotSuccessModalProps {
  onConfirm: () => void; // onConfirm 속성을 Props로 정의
}

const ForgotSuccessModal: React.FC<ForgotSuccessModalProps> = ({
  onConfirm,
}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>비밀번호 재설정 메일이 발송되었습니다.</h2>
        <button onClick={onConfirm}>확인</button>
      </div>
    </div>
  );
};

export default ForgotSuccessModal;
