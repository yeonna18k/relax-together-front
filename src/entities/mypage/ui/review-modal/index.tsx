'use client';
import ModalContent from '@/entities/mypage/ui/review-modal/ModalContent';
import Modal from '@/shared/common/ui/modal';
import { useState } from 'react';

export default function ReviewModal() {
  const [rating, setRating] = useState<number>(0);
  const [value, setValue] = useState<string>('');

  const handleSubmit = async () => {
    //TODO: 리뷰 등록 API 연동 작업
  };
  return (
    <Modal
      title="리뷰 쓰기"
      variant="default"
      size="lg"
      actionBtnName="리뷰 등록"
      disabled={rating === 0 || value === ''}
      handleAction={handleSubmit}
    >
      <ModalContent
        rating={rating}
        setRating={setRating}
        value={value}
        setValue={setValue}
      />
    </Modal>
  );
}
