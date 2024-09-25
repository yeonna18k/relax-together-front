'use client';

<<<<<<< HEAD:src/entities/mypage/ui/review-modal/CommonContentContainer.tsx
import ContentTitle from '@/entities/mypage/ui/common/ContentTitle';
=======
import ContentTitle from '@/features/mypage/ui/review-modal/ContentTitle';
>>>>>>> aa93372 (chore: fsd 폴더 구조에 맞게 mypage 기능 단위 features로 이동):src/features/mypage/ui/review-modal/CommonContentContainer.tsx

interface CommonContentContainerProps {
  title: string;
  children: React.ReactNode;
}
export default function CommonContentContainer({
  title,
  children,
}: CommonContentContainerProps) {
  return (
    <div className="flex flex-col gap-3">
      <ContentTitle title={title} />
      {children}
    </div>
  );
}
