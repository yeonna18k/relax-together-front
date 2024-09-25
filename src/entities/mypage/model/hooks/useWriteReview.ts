import { mypageApiService } from '@/entities/mypage/api/service/MypageApiService';
import { User, WriteReviewRequest } from '@/entities/mypage/model';
import { useReviewStore } from '@/entities/mypage/model/store/useReviewStore';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

export interface ProfileUpdateUser {
  user?: AxiosResponse<User, any>;
}

export function useWriteReview() {
  const queryClient = useQueryClient();
  const { gatheringId } = useReviewStore();
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');

  const { mutate } = useMutation({
    mutationFn: (writeReview: WriteReviewRequest) => {
      return mypageApiService.writeReview(writeReview);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['myGatherings'] });
    },
  });

  const handleSubmit = async () => {
    const writeReview = {
      gatheringId,
      score,
      comment,
    };

    mutate(writeReview);
  };

  return { score, setScore, comment, setComment, handleSubmit };
}
