import LikeButton from '@/shared/common/ui/like-button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 bg-black p-24">
      메인 페이지
      <LikeButton gatheringId="1" />
    </div>
  );
}
