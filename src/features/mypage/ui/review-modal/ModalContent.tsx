import CommonContentContainer from '@/features/mypage/ui/review-modal/CommonContentContainer';
import ScoreSelector from '@/features/mypage/ui/review-modal/ScoreSelector';
import InputText from '@/shared/common/ui/input-text';

interface ModalContentProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  comment: string;
  setComment: (comment: string) => void;
}
export default function ModalContent({
  score,
  setScore,
  comment,
  setComment,
}: ModalContentProps) {
  return (
    <div className="flex flex-col gap-6">
      <CommonContentContainer title="만족스러운 경험이었나요?">
        <ScoreSelector score={score} setScore={setScore} />
      </CommonContentContainer>
      <CommonContentContainer title="경험에 대해 남겨주세요.">
        <InputText
          value={comment}
          setValue={setComment}
          placeholder="남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다."
        />
      </CommonContentContainer>
    </div>
  );
}
