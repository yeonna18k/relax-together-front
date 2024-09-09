import type { Meta, StoryObj } from '@storybook/react';
import Check from './index';

const meta = {
  title: 'Shared/ui/Check',
  component: Check,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Check>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    participantCount: 5,
    isDark: false,
  },
};
