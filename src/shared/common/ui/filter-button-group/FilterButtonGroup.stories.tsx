import { commonFilters, mypageFilters } from '@/shared/fixture/filter';
import { Path } from '@/shared/lib/constants';
import type { Meta, StoryObj } from '@storybook/react';
import FilterButtonGroup from './index';

const meta = {
  title: 'Shared/ui/FilterButtonGroup',
  component: FilterButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FilterButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MypageFilterButtonGroup: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/mypage',
        query: { subPage: 'my-gatherings', filter: 'pending' },
      },
    },
  },
  args: {
    path: Path.MYPAGE,
    filters: mypageFilters,
  },
};
export const CommonFilterButtonGroup: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/gatherings',
        query: { subPage: 'dalaemfit', filter: 'all' },
      },
    },
  },
  args: {
    path: Path.GATHERINGS,
    filters: commonFilters,
  },
};
