import type { Meta, StoryObj } from '@storybook/react';
import ChipState from './index';

const meta = {
  title: 'Shared/ui/ChipState',
  component: ChipState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChipState>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Scheduled: Story = {
  args: {
    state: 'scheduled',
  },
};
export const Completed: Story = {
  args: {
    state: 'completed',
  },
};
export const Confirmed: Story = {
  args: {
    state: 'confirmed',
  },
};
export const Pending: Story = {
  args: {
    state: 'pending',
  },
};
