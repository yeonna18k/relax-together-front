'use client';
import GatheringCreateModal from '@/features/gatherings/ui/create-gathring-modal';
import CreateSuccessModal from '@/features/gatherings/ui/created-success-modal';
import { useModal } from '@/shared/hooks/useModal';

export default function ModalContainer() {
  const { modal } = useModal();
  return (
    <>
      {modal.includes('createGathering') && <GatheringCreateModal />}
      {modal.includes('createSuccess') && <CreateSuccessModal />}
    </>
  );
}
