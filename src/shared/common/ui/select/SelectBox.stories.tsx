import { selectBoxMenuItems } from '@/shared/fixture/selectbox-menu-items';
import type { Meta, StoryObj } from '@storybook/react';
import SelectBox from './index';

const meta = {
  title: 'Shared/ui/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '장소를 선택해주세요',
    menuItems: selectBoxMenuItems,
    onValueChange: (value: string) => console.log(value),
  },
};
