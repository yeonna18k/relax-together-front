import { commonApiService } from '@/shared/api/service/CommonApiService';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useLeaveGatheringsById(gatheringId: number) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (gatheringId: number) => {
      return commonApiService.leaveGatheringById(gatheringId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myGatherings'] });
    },
  });

  const handleSubmit = async () => {
    mutate(gatheringId);
  };
  return { handleSubmit };
}
