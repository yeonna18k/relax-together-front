import type { Meta, StoryObj } from '@storybook/react';
import LikeButton from './index';

const meta: Meta<typeof LikeButton> = {
  title: 'Shared/ui/LikeButton',
  component: LikeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LikeButton>;

export const Default: Story = {
  render: function Render() {
    return <LikeButton gatheringId="1" />;
  },
};
