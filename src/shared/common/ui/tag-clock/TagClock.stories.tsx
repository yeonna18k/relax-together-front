import { Meta, StoryObj } from '@storybook/react';
import TagClock from './index';

const meta = {
  title: 'Shared/ui/TagClock',
  component: TagClock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TagClock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: '오늘 21시 마감',
  },
};
