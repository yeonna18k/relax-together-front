import { Meta, StoryObj } from '@storybook/react';
import PopupModal from './index';

const meta: Meta<typeof PopupModal> = {
  title: 'PopupModal',
  component: PopupModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PopupModal>;

export const Default: Story = {};
