import type { Meta, StoryObj } from '@storybook/react';
import ReviewCard from './index';

const meta = {
  title: 'Shared/ui/ReviewCard',
  component: ReviewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const SCORE_EXAMPLE = [
  {
    oneStar: 1,
    twoStars: 1,
    threeStars: 1,
    fourStars: 0,
    fiveStars: 0,
  },
];

export const Mypage: Story = {
  args: {
    page: 'mypage',
    score: SCORE_EXAMPLE,
    user_name: '럽윈즈올',
    user_image: '',
    content:
      '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.',
    place: '달램핏 오피스 스트레칭 이용',
    address: '을지로 3가',
    date: '2024.01.25',
  },
};
export const Reviews: Story = {
  args: {
    page: 'reviews',
    score: SCORE_EXAMPLE,
    user_name: '럽윈즈올',
    user_image: '',
    content:
      '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.',
    place: '달램핏 오피스 스트레칭 이용',
    address: '을지로 3가',
    date: '2024.01.25',
  },
};

export const Search: Story = {
  args: {
    page: 'search',
    score: SCORE_EXAMPLE,
    user_name: '럽윈즈올',
    user_image: '',
    content:
      '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.',
    place: '달램핏 오피스 스트레칭 이용',
    address: '을지로 3가',
    date: '2024.01.25',
  },
};
