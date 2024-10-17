import { ChipInfoType } from '@/shared/lib/constants';
import type { Meta, StoryObj } from '@storybook/react';
import ChipInfo from './index';

const meta = {
  title: 'Shared/ui/ChipInfo',
  component: ChipInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChipInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Date: Story = {
  args: {
    type: ChipInfoType.DATE,
    children: '1월 7일',
  },
};
export const Time: Story = {
  args: {
    type: ChipInfoType.TIME,
    children: '17:30',
  },
};
