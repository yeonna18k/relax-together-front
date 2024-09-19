'use client';
import CommonContentContainer from '@/entities/mypage/ui/review-modal/CommonContentContainer';
import RatingSelector from '@/entities/mypage/ui/review-modal/RatingSelector';
import InputText from '@/shared/common/ui/input-text';
import Modal from '@/shared/common/ui/modal';
import { useState } from 'react';

export default function ReviewModal() {
  const [rating, setRating] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  return (
    <Modal
      title="리뷰 쓰기"
      variant="default"
      size="lg"
      actionBtnName="리뷰 등록"
      handleAction={() => {}}
    >
      <div className="flex flex-col gap-6">
        <CommonContentContainer title="만족스러운 경험이었나요?">
          <RatingSelector rating={rating} setRating={setRating} />
        </CommonContentContainer>
        <CommonContentContainer title="경험에 대해 남겨주세요.">
          <InputText
            value={value}
            setValue={setValue}
            placeholder="남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다."
          />
        </CommonContentContainer>
      </div>
    </Modal>
  );
}
