import { mypageApiService } from '@/entities/mypage/api/service/MypageApiService';
import { UpdateUserRequest, User } from '@/entities/mypage/model';
import { queries } from '@/shared/service/queries';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

export interface ProfileUpdateUser {
  user?: AxiosResponse<User, any>;
}

export function useUpdateUserInfo({ user }: ProfileUpdateUser) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (updateUserRequest: UpdateUserRequest) => {
      return mypageApiService.updateUser(updateUserRequest);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(queries.user.userInfo());
    },
  });

  const [updateUser, setUpdateUser] = useState<UpdateUserRequest>({
    companyName: '',
    profileImage: '',
  });

  useEffect(() => {
    if (user) {
      setUpdateUser({
        companyName: user.data.companyName,
        profileImage: user.data.image,
      });
    }
  }, [user]);

  const handleSubmit = async () => {
    mutate(updateUser);
  };

  return { updateUser, setUpdateUser, handleSubmit };
}
