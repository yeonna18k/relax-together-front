'use client';
import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import ReviewFilterButtonGroup from '@/features/mypage/ui/tab-section/ReviewFilterButtonGroup';
import SlideTabs from '@/features/mypage/ui/tab-section/SlideTabs';

export default function TabSection() {
  const { currentSubPage } = useCommonSearchParams();

  return (
    <section className="flex w-full flex-col gap-6 md:flex-row md:justify-between md:gap-0">
      <SlideTabs />
      {currentSubPage === 'my-reviews' && <ReviewFilterButtonGroup />}
    </section>
  );
}
