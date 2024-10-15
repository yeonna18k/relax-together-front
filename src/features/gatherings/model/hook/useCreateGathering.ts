import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import { gatheringsApiService } from '@/entities/gatherings/api/service/GatheringsApiService';
import { CreateGathering } from '@/features/gatherings/model/create-gathring';
import { useModal } from '@/shared/hooks/useModal';
import { Modal } from '@/shared/lib/constants';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCreateGathering() {
  const { closeModal, openModal } = useModal();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: CreateGathering) => {
      return gatheringsApiService.createGathering(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['gatherings', additionalParams],
      });
    },
  });
  async function onSubmit(values: CreateGathering) {
    mutate(values);
    closeModal(Modal.CREATE_GATHERING);
    openModal(Modal.CREATE_SUCCESS);
  }
  return { onSubmit };
}
