import { useUserData } from '@/entities/mypage/model/hooks/useUserData';
import handlers from '@/shared/mocks/handlers';
import type { Meta, StoryObj } from '@storybook/react';
import Profile from './index';

const meta: Meta<typeof Profile> = {
  title: 'Entities/Mypage/ui/Profile',
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
    const { user } = useUserData();
    return (
      <div className="px-5">
        <Profile user={user} />
      </div>
    );
  },
};
