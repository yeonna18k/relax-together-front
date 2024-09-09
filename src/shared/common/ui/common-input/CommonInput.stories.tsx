import { Meta, StoryObj } from '@storybook/react';
import CommonInput from './index';

const meta = {
  title: 'Shared/ui/CommonInput',
  component: CommonInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CommonInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '장소를 선택해주세요',
  },
};
