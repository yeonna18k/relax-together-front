import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './index';

const meta = {
  title: 'Shared/ui/ProgressBar',
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
    value: 0,
  },
};
