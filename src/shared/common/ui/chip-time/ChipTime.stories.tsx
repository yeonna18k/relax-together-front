import type { Meta, StoryObj } from '@storybook/react';
import ChipTime from './index';

const meta = {
  title: 'Shared/ui/ChipTime',
  component: ChipTime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChipTime>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'enabled',
    hour: 15,
    minute: 0,
  },
};
