import DalrempitIcon from '@/shared/assets/icons/dalrempit-icon';
import WorcationIcon from '@/shared/assets/icons/worcation-icon';
import { Meta, StoryObj } from '@storybook/react';
import SliderButtonWithIcon from './index';

const meta = {
  title: 'Shared/ui/SliderButtonWithIcon',
  component: SliderButtonWithIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SliderButtonWithIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dalrempit: Story = {
  args: {
    label: '달램핏',
    isActive: true,
    onClick: () => alert('달램핏 버튼 클릭됨!'),
    IconComponent: DalrempitIcon,
  },
};

export const Worcation: Story = {
  args: {
    label: '워케이션',
    isActive: false,
    onClick: () => alert('워케이션 버튼 클릭됨!'),
    IconComponent: WorcationIcon,
  },
};
