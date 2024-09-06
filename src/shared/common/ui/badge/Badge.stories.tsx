import type { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta = {
  title: 'Shared/ui/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 1,
  },
};
export const OverCount: Story = {
  args: {
    count: 1000,
  },
};
