import type { Meta, StoryObj } from '@storybook/react';
import InputText from './index';

const meta = {
  title: 'Shared/ui/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder:
      '남겨주신 리뷰는 프로그램 운영 및 다른 회원 분들께 큰 도움이 됩니다.',
  },
};
