'use client';
import { useReviewStore } from '@/entities/mypage/model/store/useReviewStore';
import ModalContent from '@/features/mypage/ui/review-modal/ModalContent';
import Modal from '@/shared/common/ui/modal';
import { useState } from 'react';

export default function ReviewModal() {
  const { gatheringId } = useReviewStore();
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = async () => {
    //TODO: 리뷰 등록 API 연동 작업
  };
  return (
    <Modal
      title="리뷰 쓰기"
      variant="default"
      size="lg"
      actionBtnName="리뷰 등록"
      disabled={score === 0 || comment === ''}
      handleAction={handleSubmit}
    >
      <ModalContent
        score={score}
        setScore={setScore}
        comment={comment}
        setComment={setComment}
      />
    </Modal>
  );
}
