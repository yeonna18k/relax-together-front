'use client';

import ContentTitle from '@/entities/mypage/ui/common/ContentTitle';

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
