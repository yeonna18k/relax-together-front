import CommonContentContainer from '@/entities/mypage/ui/review-modal/CommonContentContainer';
import RatingSelector from '@/entities/mypage/ui/review-modal/RatingSelector';
import InputText from '@/shared/common/ui/input-text';

interface ModalContentProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  value: string;
  setValue: (value: string) => void;
}
export default function ModalContent({
  rating,
  setRating,
  value,
  setValue,
}: ModalContentProps) {
  return (
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
  );
}
