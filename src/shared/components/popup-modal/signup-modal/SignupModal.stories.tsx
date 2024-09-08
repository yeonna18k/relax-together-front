import { Meta, StoryObj } from '@storybook/react';
import SignupModal from './index';

const meta: Meta<typeof SignupModal> = {
  title: 'Modals/SignupModal',
  component: SignupModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignupModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert('모달이 닫혔습니다.'),
  },
};
