import { MAX_CAPACITY } from '@/shared/lib/constants';
import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './index';

const meta = {
  title: 'Features/ui/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    participantCount: 0,
    capacity: MAX_CAPACITY,
  },
};
