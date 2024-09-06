import type { Meta, StoryObj } from '@storybook/react';
import CommonButton from './index';

const meta = {
  title: 'Shared/ui/CommonButton',
  component: CommonButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommonButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'sm',
    content: '생성하기',
    onClickHandler: () => {
      console.log('click');
    },
  },
};
