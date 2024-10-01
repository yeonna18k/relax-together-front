import {
  gatheringsSortItems,
  reviewsSortItems,
} from '@/shared/fixture/select-items';
import type { Meta, StoryObj } from '@storybook/react';
import CommonSearchFilter from './index';

const meta = {
  title: 'Shared/ui/CommonSearchFilter',
  component: CommonSearchFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommonSearchFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GatheringsSearchFilter: Story = {
  args: {
    sortItems: gatheringsSortItems,
  },
};
export const OtherSearchFilter: Story = {
  args: {
    sortItems: reviewsSortItems,
  },
};
