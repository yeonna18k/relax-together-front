import { AlertDialog } from '@/shared/ui/alert-dialog';
import type { Meta, StoryObj } from '@storybook/react';
import ReviewModal from './index';

const meta: Meta<typeof ReviewModal> = {
  title: 'Features/Mypage/ui/ReviewModal',
  component: ReviewModal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ReviewModal>;

export const Default: Story = {
  render: function Render() {
    return (
      <AlertDialog open>
        <ReviewModal />
      </AlertDialog>
    );
  },
};
