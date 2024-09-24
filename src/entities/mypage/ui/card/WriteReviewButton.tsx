'use client';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';
import { Button } from '@/shared/ui/button';

export default function WriteReviewButton({ id }: Pick<MyGathering, 'id'>) {
  // TODO: 리뷰 작성하기 버튼 클릭 시 리뷰 작성 모달 화면 렌더링
  return <Button size="sm">리뷰 작성하기</Button>;
}
