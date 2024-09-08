import type { Meta, StoryObj } from '@storybook/react';
import Chip from './index';

const meta = {
  title: 'Shared/ui/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: true,
    children: '전체',
  },
};
