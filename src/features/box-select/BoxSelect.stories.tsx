import type { Meta, StoryObj } from '@storybook/react';
import BoxSelect from './index';

const meta = {
  title: 'Shared/ui/BoxSelect',
  component: BoxSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BoxSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    group: '달램핏',
    text: '오피스 스트레칭',
  },
};
