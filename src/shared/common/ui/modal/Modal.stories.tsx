import { AlertDialog } from '@/shared/ui/alert-dialog';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './index';

const meta: Meta<typeof Modal> = {
  title: 'Shared/ui/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <AlertDialog open>
        <Modal {...args}>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </Modal>
      </AlertDialog>
    );
  },
  args: {
    title: '리뷰 작성하기',
    variant: 'default',
    disabled: false,
    size: 'lg',
    actionBtnName: '확인',
    handleAction: () => {},
  },
};

export const NonTitle: Story = {
  render: function Render(args) {
    return (
      <AlertDialog open>
        <Modal {...args}>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </Modal>
      </AlertDialog>
    );
  },
  args: {
    variant: 'default',
    disabled: false,
    size: 'lg',
    actionBtnName: '확인',
    handleAction: () => {},
  },
};

export const Single: Story = {
  render: function Render(args) {
    return (
      <AlertDialog open>
        <Modal {...args}>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
        </Modal>
      </AlertDialog>
    );
  },
  args: {
    title: '리뷰 작성하기',
    variant: 'single',
    disabled: false,
    size: 'sm',
    actionBtnName: '확인',
    handleAction: () => {},
  },
};
