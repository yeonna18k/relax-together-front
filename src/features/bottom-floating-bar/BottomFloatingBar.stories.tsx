import type { Meta, StoryObj } from '@storybook/react';
import BottomFloatingBar from './index';

const meta: Meta<typeof BottomFloatingBar> = {
  title: 'Features/ui/BottomFloatingBar',
  component: BottomFloatingBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BottomFloatingBar>;

export const Default: Story = {
  args: {
    isHost: false,
  },
};
