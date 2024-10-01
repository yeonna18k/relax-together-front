import SlideTabs from '@/shared/common/ui/common-slide-tabs/SlideTabs';
import { commonTabs, mypageTabs } from '@/shared/fixture/tabs';
import { Path } from '@/shared/lib/constants';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Shared/ui/SlideTabs',
  component: SlideTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SlideTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MypageSlideTabs: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/mypage',
        query: { subPage: 'my-gatherings' },
      },
    },
  },
  args: {
    path: Path.mypage,
    tabs: mypageTabs,
  },
};
export const CommonSlideTabs: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/gatherings',
        query: { subPage: 'dalaemfit' },
      },
    },
  },
  args: {
    path: Path.gatherings,
    tabs: commonTabs,
  },
};
