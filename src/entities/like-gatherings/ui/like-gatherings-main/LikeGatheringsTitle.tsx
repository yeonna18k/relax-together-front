import SlideTabs from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import { commonTabs } from '@/shared/fixture/tabs';
import { Path } from '@/shared/lib/constants';

export default function LikeGatheringsTitle() {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 px-5 sm:px-4 lg:mt-[10px]">
      <h2 className="text-[1.375rem] font-bold text-gray-900">찜한 모임</h2>
      {/* TODO: SlideTabs 패딩(py) 수정 필요 */}
      <SlideTabs
        tabs={commonTabs}
        path={Path['LIKE_GATHERINGS']}
        variant="default"
      />
    </div>
  );
}
