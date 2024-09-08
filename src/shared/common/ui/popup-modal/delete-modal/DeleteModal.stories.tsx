import { Meta, StoryObj } from '@storybook/react';
import DeleteModal from './index';

const meta: Meta<typeof DeleteModal> = {
  title: 'popup-modal/DeleteModal',
  component: DeleteModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DeleteModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('모달이 닫혔습니다.'),
  },
};
