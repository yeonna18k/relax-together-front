'use client';
import Modal from '@/shared/common/ui/modal';
import GatheringModalContent from './GatheringModalContent';
export default function GatheringCreateModal() {
  // TODO: 모임 만들기에 필요한 상태값 정의

  const handleSubmit = async () => {
    //TODO: 리뷰 등록 API 연동 작업
  };
  return (
    <Modal
      title="모임 만들기"
      variant="single"
      size="lg"
      actionBtnName="확인"
      disabled={true}
      handleAction={handleSubmit}
    >
      <GatheringModalContent />
    </Modal>
  );
}
