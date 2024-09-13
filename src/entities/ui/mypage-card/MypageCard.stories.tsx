import type { Meta, StoryObj } from '@storybook/react';
import MypageCard from './index';

const meta: Meta<typeof MypageCard> = {
  title: 'Entities/ui/MypageCard',
  component: MypageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MypageCard>;

export const Default: Story = {
  parameters: {
    nextjs: {
      navigation: {
        query: { filter: 'my-gatherings' },
      },
    },
  },
  render: function Render(args) {
    return <MypageCard {...args} />;
  },
  args: {
    image: '/assets/review-sample.png',
    alt: '리뷰 샘플 이미지',
  },
};
