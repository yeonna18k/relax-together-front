import ReviewFilterButtonGroup from '@/entities/mypage/ui/tab-section/ReviewFilterButtonGroup';
import SlideTabs from '@/entities/mypage/ui/tab-section/SlideTabs';
import { useSearchParams } from 'next/navigation';

export default function TabSection() {
  const searchParams = useSearchParams();
  const subPage = searchParams.get('subPage');
  return (
    <section className="flex w-full flex-col gap-6 md:flex-row md:justify-between md:gap-0">
      <SlideTabs />
      {subPage === 'my-reviews' && <ReviewFilterButtonGroup />}
    </section>
  );
}
