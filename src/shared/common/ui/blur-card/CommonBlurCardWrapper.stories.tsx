import type { Meta, StoryObj } from '@storybook/react';
import BlurCard from './index';

const meta: Meta<typeof BlurCard> = {
  title: 'Shared/ui/BlurCard',
  component: BlurCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BlurCard>;

export const Default: Story = {
  render: function Render() {
    return (
      <div className="h-[156px] max-h-[156px] w-[996px] max-w-[996px]">
        <BlurCard />
      </div>
    );
  },
};
