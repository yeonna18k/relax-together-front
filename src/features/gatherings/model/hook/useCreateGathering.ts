import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import { gatheringsApiService } from '@/entities/gatherings/api/service/GatheringsApiService';
import { CreateGathering } from '@/features/gatherings/model/create-gathring';
import { useModal } from '@/shared/hooks/useModal';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCreateGathering() {
  const { closeModal } = useModal();
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useMutation({
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
    console.log('🚀 ~ onSubmit ~ values:', values);
    // mutate(values);
    // if (isSuccess) {
    //   closeModal('createGathering');
    // }
  }
  return { onSubmit };
}
