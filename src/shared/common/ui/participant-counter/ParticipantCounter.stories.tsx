import type { Meta, StoryObj } from '@storybook/react';
import ParticipantCounter from './index';

const meta: Meta<typeof ParticipantCounter> = {
  title: 'Shared/ui/ParticipantCounter',
  component: ParticipantCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ParticipantCounter>;

export const Default: Story = {
  render: function Render(args) {
    const isClosed = args.participantCount === 20;

    const iconColor = isClosed ? 'fill-orange-400' : 'fill-gray-700';
    const valueColor = isClosed ? 'text-orange-400' : 'text-gray-700';
    return (
      <ParticipantCounter
        {...args}
        iconColor={iconColor}
        valueColor={valueColor}
      />
    );
  },
  args: {
    participantCount: 0,
  },
};
