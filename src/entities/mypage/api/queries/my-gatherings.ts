import { fetchJoinedGatherings } from '@/entities/mypage/api/my-gatherings';
import { useCommonInfiniteData } from '@/entities/mypage/api/queries/common';
import { MyGathering } from '@/entities/mypage/model/my-gatherings';

export function useMyGatheringsData() {
  return useCommonInfiniteData<MyGathering>(
    ['myGatherings'],
    fetchJoinedGatherings,
  );
}
