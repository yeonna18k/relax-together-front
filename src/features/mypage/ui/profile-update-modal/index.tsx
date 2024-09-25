'use client';

import {
  ProfileUpdateUser,
  useUpdateUserInfo,
} from '@/entities/mypage/model/hooks/useUpdateUserInfo';
import EditCompanyNameInput from '@/features/mypage/ui/profile-update-modal/EditCompanyNameInput';
import EditImage from '@/features/mypage/ui/profile-update-modal/EditImage';
import Modal from '@/shared/common/ui/modal';

export default function ProfileUpdateModal({ user }: ProfileUpdateUser) {
  const { updateUser, setUpdateUser, handleSubmit } = useUpdateUserInfo({
    user,
  });

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
