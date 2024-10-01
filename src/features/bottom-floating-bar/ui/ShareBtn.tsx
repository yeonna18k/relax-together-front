'use client';

import CommonButton from '@/shared/common/ui/common-button';
import { copyToClipboard } from '@/shared/lib/utils';
import { useParams } from 'next/navigation';

export default function ShareBtn() {
  const params = useParams() as { id: string };

  const handleShareBtnClick = () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/gatherings/${params.id}`;

    // 클립보드에 URL 복사
    copyToClipboard(textToCopy);
  };

  return (
    <CommonButton
      variant="default"
      size="lg"
      className="h-11 w-1/2 sm:w-[115px]"
      onClick={handleShareBtnClick}
    >
      공유하기
    </CommonButton>
  );
}
