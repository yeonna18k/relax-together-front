'use client';
import Modal from '@/shared/common/ui/modal';
import { useState } from 'react';
import GatheringModalContent from './GatheringModalContent';

export default function GatheringCreateModal() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (data: any) => {
    setFormData(data);
    setIsFormValid(true);
  };

  const handleSubmit = async () => {
    console.log('Submitting data:', formData);
    // TODO: 실제로 API 호출
  };

  return (
    <Modal
      title="모임 만들기"
      variant="single"
      size="lg"
      actionBtnName="확인"
      disabled={!isFormValid}
      handleAction={handleSubmit}
    >
      <GatheringModalContent onSubmit={handleFormSubmit} />
    </Modal>
  );
}
