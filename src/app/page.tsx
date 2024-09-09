'use client';

import CommonBadge from '@/shared/common/ui/badge';
import Check from '@/shared/common/ui/check';
import Chip from '@/shared/common/ui/chip';
import ChipTime from '@/shared/common/ui/chip-time';
import CommonButton from '@/shared/common/ui/common-button';
import CommonInput from '@/shared/common/ui/common-input';
import InputText from '@/shared/common/ui/input-text';

import SelectBox from '@/shared/common/ui/select/index';
import TagClock from '@/shared/common/ui/tag-clock';
import DeleteModal from '@/shared/components/popup-modal/delete-modal';
import SignupModal from '@/shared/components/popup-modal/signup-modal';
import { selectBoxMenuItems } from '@/shared/fixture/selectbox-menu-items';
import { useState } from 'react';

export default function Home() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSingupModalOpen] = useState(false);

  const openSignupModal = () => setIsSingupModalOpen(true);
  const closeSignupModal = () => setIsSingupModalOpen(false);

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24">
      <CommonBadge count={10} />
      <CommonBadge count={1000} />
      <SelectBox
        placeholder="장소를 선택해주세요"
        menuItems={selectBoxMenuItems}
      />
      <InputText placeholder="남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다." />
      <CommonButton variant="outlined" size="lg">
        생성하기
      </CommonButton>
      <Chip selected={true}>전체</Chip>
      <ChipTime state="enabled" hour={11} minute={0} />
      <ChipTime state="disabled" hour={9} minute={30} />
      <ChipTime state="selected" hour={15} minute={0} />
      <CommonInput />
      <TagClock message="오늘 21시 마감" variant="default" />

      <CommonButton size="sm" variant="default" onClick={openSignupModal}>
        가입확인 모달
      </CommonButton>
      <CommonButton size="sm" variant="default" onClick={openDeleteModal}>
        내용삭제 모달
      </CommonButton>
      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
      <DeleteModal isOpen={isDeleteModalOpen} onClose={closeDeleteModal} />
      <Check participantCount={5} isDark={false} />
    </div>
  );
}
