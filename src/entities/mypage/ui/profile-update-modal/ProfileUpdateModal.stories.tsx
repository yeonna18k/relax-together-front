import handlers from '@/shared/mocks/handlers';
import { AlertDialog } from '@/shared/ui/alert-dialog';
import type { Meta, StoryObj } from '@storybook/react';
import ProfileUpdateModal from './index';

const meta: Meta<typeof ProfileUpdateModal> = {
  title: 'Entities/Mypage/ui/ProfileUpdateModal',
  component: ProfileUpdateModal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ProfileUpdateModal>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers,
    },
  },
  render: function Render() {
    return (
      <AlertDialog open>
        <ProfileUpdateModal />
      </AlertDialog>
    );
  },
};
