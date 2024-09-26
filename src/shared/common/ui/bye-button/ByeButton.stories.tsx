import type { Meta, StoryObj } from '@storybook/react';
import ByeButton from './index';

const meta: Meta<typeof ByeButton> = {
  title: 'Shared/ui/ByeButton',
  component: ByeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ByeButton>;

export const Default: Story = {
  render: function Render() {
    const handleClick = () => {};
    return <ByeButton onClick={handleClick} />;
  },
};
