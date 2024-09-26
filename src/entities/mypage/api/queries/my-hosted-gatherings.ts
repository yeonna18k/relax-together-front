import { fetchHostedGatherings } from '@/entities/mypage/api/my-hosted-gatherings';
import { useCommonInfiniteData } from '@/entities/mypage/api/queries/common';
import { MyHostedGathering } from '@/entities/mypage/model';

export function useMyHostedGatheringsData() {
  return useCommonInfiniteData<MyHostedGathering>(
    ['myHostedGatherings'],
    fetchHostedGatherings,
  );
}
