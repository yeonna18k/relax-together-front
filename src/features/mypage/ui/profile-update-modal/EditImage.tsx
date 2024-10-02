'use client';

import MypageImage from '@/entities/mypage/ui/common/MypageImage';
import EditButton from '@/shared/assets/icons/edit-button.svg';
import useFileUpload from '@/shared/hooks/useFileUpload';
import { UpdateUserRequest } from '@/shared/model';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { useEffect } from 'react';

interface EditImageProps {
  image?: string;
  setUpdateUser: React.Dispatch<React.SetStateAction<UpdateUserRequest>>;
}
export default function EditImage({ image, setUpdateUser }: EditImageProps) {
  const { handleFileChange, downloadURL } = useFileUpload();

  useEffect(() => {
    if (downloadURL) {
      setUpdateUser(prev => ({ ...prev, profileImage: downloadURL }));
    }
  }, [downloadURL, setUpdateUser]);

  return (
    <div className="h-[72px] w-[72px]">
      <Label
        htmlFor="profile-update"
        className="relative w-full p-0 hover:cursor-pointer"
      >
        <MypageImage image={image} />
        <EditButton className="absolute bottom-0 right-0 h-[22px] w-[22px]" />
      </Label>
      <Input
        id="profile-update"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
