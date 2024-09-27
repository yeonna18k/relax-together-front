import { CommonSelectItem } from '@/shared/common/ui/common-select';

export const commonSelectItems: Array<CommonSelectItem> = [
  {
    value: 'ALL',
    label: '지역 전체',
  },
  {
    value: '건대입구',
    label: '건대입구',
  },
  {
    value: '을지로 3가',
    label: '을지로 3가',
  },
  {
    value: '신림',
    label: '신림',
  },
  {
    value: '홍대입구',
    label: '홍대입구',
  },
];
export const gatheringsSortItems: Array<CommonSelectItem> = [
  {
    value: 'DUE_DATE',
    label: '마감 임박',
  },
  {
    value: 'PARTICIPANTS',
    label: '참여 인원 순',
  },
];
export const reviewsSortItems: Array<CommonSelectItem> = [
  {
    value: 'RECENT',
    label: '최신순',
  },
  {
    value: 'RATING',
    label: '평점 높은 순',
  },
  {
    value: 'PARTICIPANTS',
    label: '참여 인원 순',
  },
];
