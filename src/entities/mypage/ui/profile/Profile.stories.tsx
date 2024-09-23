import handlers from '@/shared/mocks/handlers';
import type { Meta, StoryObj } from '@storybook/react';
import Profile from './index';

const meta: Meta<typeof Profile> = {
  title: 'Entities/ui/Profile',
  component: Profile,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers,
    },
  },
  render: function Render() {
    return (
      <div className="px-5">
        <Profile />
      </div>
    );
  },
};
