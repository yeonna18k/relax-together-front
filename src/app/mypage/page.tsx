import MypageCard from '@/entities/mypage/ui/card';
import CommonBlurCardWrapper from '@/shared/common/ui/blur-card/CommonBlurCardWrapper';

import { getISOTimeWithOffset } from '@/shared/lib/utils';

export default function Mypage() {
  return (
    <div>
      마이페이지
      <CommonBlurCardWrapper>
        <MypageCard
          image="/assets/review-sample.png"
          alt="리뷰 샘플 이미지"
          name="달램핏 오피스 스트래칭"
          location="을지로3가"
          participantCount={4}
          dateTime={getISOTimeWithOffset(4)}
        />
      </CommonBlurCardWrapper>
    </div>
  );
}
