'use client';

import {
  ProfileUpdateUser,
  useUpdateUserInfo,
} from '@/entities/mypage/model/hooks/useUpdateUserInfo';
import EditCompanyNameInput from '@/features/mypage/ui/profile-update-modal/EditCompanyNameInput';
import EditImage from '@/features/mypage/ui/profile-update-modal/EditImage';
import LoadingSpinner from '@/shared/common/ui/loading-spinner';
import Modal from '@/shared/common/ui/modal';
import useFileUpload from '@/shared/hooks/useFileUpload';
import { CommonSize } from '@/shared/lib/constants';

export default function ProfileUpdateModal({ user }: ProfileUpdateUser) {
  const { isUploading } = useFileUpload();
  const { updateUser, setUpdateUser, handleSubmit } = useUpdateUserInfo({
    user,
  });

  return (
    <Modal
      title="프로필 수정하기"
      size={CommonSize.LARGE}
      actionBtnName={isUploading ? <LoadingSpinner /> : '수정하기'}
      actionBtnClassName={`${isUploading ? 'pointer-events-none bg-gray-200' : ''}`}
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
