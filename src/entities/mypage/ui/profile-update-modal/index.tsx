'use client';
import EditCompanyNameInput from '@/entities/mypage/ui/profile-update-modal/EditCompanyNameInput';
import Modal from '@/shared/common/ui/modal';
import { useState } from 'react';

export default function ReviewModal() {
  const [value, setValue] = useState<string>('');

  const handleSubmit = async () => {
    //TODO: 회원 정보 수정 API 연동 작업
  };
  return (
    <Modal
      title="프로필 수정하기"
      variant="default"
      size="lg"
      actionBtnName="수정하기"
      disabled={value.length <= 0}
      handleAction={handleSubmit}
    >
      <>
        <EditCompanyNameInput
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </>
    </Modal>
  );
}
