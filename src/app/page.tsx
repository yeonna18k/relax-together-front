import MypageCard from '@/entities/ui/mypage-card';
import { getISOTimeWithOffset } from '@/shared/lib/utils';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-0 xs:p-24">
      메인 페이지
      <MypageCard
        image="/assets/review-sample.png"
        alt="review-sample"
        name="달램핏 오피스 스트래칭"
        location="을지로3가"
        participantCount={5}
        dateTime={getISOTimeWithOffset(-4)}
      />
    </div>
  );
}
