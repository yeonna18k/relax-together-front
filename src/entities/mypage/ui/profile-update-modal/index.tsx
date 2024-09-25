'use client';
import { useUpdateUserInfo } from '@/entities/mypage/api';
import { UpdateUserRequest, User } from '@/entities/mypage/model/user';
import EditCompanyNameInput from '@/entities/mypage/ui/profile-update-modal/EditCompanyNameInput';
import EditImage from '@/entities/mypage/ui/profile-update-modal/EditImage';
import Modal from '@/shared/common/ui/modal';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

interface ProfileUpdateModalProps {
  user?: AxiosResponse<User, any>;
}
export default function ProfileUpdateModal({ user }: ProfileUpdateModalProps) {
  const mutate = useUpdateUserInfo();

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
    (await mutate)(updateUser);
  };
  return (
    <Modal
      title="프로필 수정하기"
      variant="default"
      size="lg"
      actionBtnName="수정하기"
      disabled={updateUser.companyName.length <= 0}
      handleAction={handleSubmit}
    >
      <div className="flex flex-col gap-6">
        <EditImage
          image={updateUser.profileImage}
          setUpdateUser={setUpdateUser}
        />
        <EditCompanyNameInput
          value={updateUser.companyName}
          onChange={e =>
            setUpdateUser(prev => ({ ...prev, companyName: e.target.value }))
          }
        />
      </div>
    </Modal>
  );
}
