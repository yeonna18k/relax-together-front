import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import { gatheringsApiService } from '@/entities/gatherings/api/service/GatheringsApiService';
import { CreateGathering } from '@/features/gatherings/model/create-gathring';
import { useModal } from '@/shared/hooks/useModal';

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
    closeModal('createGathering');
    openModal('createSuccess');
  }
  return { onSubmit };
}
