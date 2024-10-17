'use client';
import GatheringCreateModal from '@/features/gatherings/ui/create-gathring-modal';
import CreateSuccessModal from '@/features/gatherings/ui/created-success-modal';
import { useModal } from '@/shared/hooks/useModal';
import { ModalType } from '@/shared/lib/constants';

export default function ModalContainer() {
  const { modal } = useModal();
  return (
    <>
      {modal.includes(ModalType.CREATE_GATHERING) && <GatheringCreateModal />}
      {modal.includes(ModalType.CREATE_SUCCESS) && <CreateSuccessModal />}
    </>
  );
}
