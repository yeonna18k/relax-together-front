import MypageCard from '@/entities/ui/mypage-card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-0 xs:p-24">
      메인 페이지
      <MypageCard image="/assets/review-sample.png" alt="review-sample" />
    </div>
  );
}
