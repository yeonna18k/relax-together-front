import LikeGatheringsBanner from '@/entities/like-gatherings/ui/like-gatherings-banner';
import LikeGatheringCardList from '@/entities/like-gatherings/ui/like-gatherings-main/LikeGatheringCardList';
import LikeGatheringsTitle from '@/entities/like-gatherings/ui/like-gatherings-main/LikeGatheringsTitle';

import CommonSearchFilter from '@/shared/common/ui/common-search-filter';
import { gatheringsSortItems } from '@/shared/fixture/select-items';

export default function LikeGatherings() {
  return (
    <div className="mx-auto max-w-[996px]">
      <LikeGatheringsBanner />
      <div className="sm:px-6 lg:px-0">
        <LikeGatheringsTitle />
        <div className="px-4">
          <CommonSearchFilter sortItems={gatheringsSortItems} />
          <LikeGatheringCardList />
        </div>
      </div>
    </div>
  );
}
