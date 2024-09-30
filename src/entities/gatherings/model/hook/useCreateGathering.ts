import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import { gatheringsApiService } from '@/entities/gatherings/api/service/GatheringsApiService';
import { CreateGathering } from '@/entities/gatherings/ui/main/GatheringCreateModal';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useCreateGathering() {
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
    console.log('🚀 ~ onSubmit ~ values:', values);
    // mutate(values);
  }
  return { onSubmit };
}
