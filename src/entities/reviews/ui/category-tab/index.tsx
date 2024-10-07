import SlideTabs from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import { commonTabs } from '@/shared/fixture/tabs';
import { Path } from '@/shared/lib/constants';

export default function CategoryTab() {
  return (
    <div className="flex h-12 items-center justify-between border-b border-b-gray-300 px-4 md:h-16">
      <p className="text-[22px] font-bold text-gray-900">모든 리뷰</p>
      <SlideTabs tabs={commonTabs} path={Path.reviews} variant={Path.reviews} />
    </div>
  );
}
