import DalrempitIcon from '@/shared/assets/icons/dalrempit-icon.svg';
import WorcationIcon from '@/shared/assets/icons/worcation-icon.svg';
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

// Dalrempit 버튼 스토리
export const Dalrempit: Story = {
  args: {
    label: '달램핏',
    isActive: true,
    size: 'default', // 기본 사이즈로 설정
    onClick: () => alert('달램핏 버튼 클릭됨!'),
    IconComponent: DalrempitIcon,
  },
};

// Worcation 버튼 스토리
export const Worcation: Story = {
  args: {
    label: '워케이션',
    isActive: false,
    size: 'default', // 기본 사이즈로 설정
    onClick: () => alert('워케이션 버튼 클릭됨!'),
    IconComponent: WorcationIcon,
  },
};

// 작은 사이즈의 Dalrempit 버튼 스토리
export const SmallDalrempit: Story = {
  args: {
    label: '달램핏',
    isActive: true,
    size: 'small', // 작은 사이즈로 설정
    onClick: () => alert('작은 달램핏 버튼 클릭됨!'),
    IconComponent: DalrempitIcon,
  },
};

// 작은 사이즈의 Worcation 버튼 스토리
export const SmallWorcation: Story = {
  args: {
    label: '워케이션',
    isActive: false,
    size: 'small', // 작은 사이즈로 설정
    onClick: () => alert('작은 워케이션 버튼 클릭됨!'),
    IconComponent: WorcationIcon,
  },
};
