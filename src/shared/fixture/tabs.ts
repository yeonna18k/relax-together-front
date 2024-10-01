'use client';
import DalaemfitIcon from '@/shared/assets/icons/dalaemfit.svg';
import WorkationIcon from '@/shared/assets/icons/workation.svg';

export type Tab = {
  IconComponent?: React.FC<{ className?: string }>;
  name: string;
  subPage: string;
  filter: string;
};

export const mypageTabs: Array<Tab> = [
  { name: '나의 모임', subPage: 'my-gatherings', filter: '' },
  { name: '나의 리뷰', subPage: 'my-reviews', filter: '&filter=written' },
  { name: '내가 만든 모임', subPage: 'my-hosted-gatherings', filter: '' },
];

export const commonTabs: Array<Tab> = [
  {
    IconComponent: DalaemfitIcon,
    name: '달램핏',
    subPage: 'dalaemfit',
    filter: '&filter=all',
  },
  {
    IconComponent: WorkationIcon,
    name: '워케이션',
    subPage: 'workation',
    filter: '',
  },
];
