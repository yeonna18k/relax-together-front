import type { Meta, StoryObj } from '@storybook/react';
import ReviewCard from './index';

const meta = {
  title: 'Features/ui/ReviewCard',
  component: ReviewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Mypage: Story = {
  args: {
    page: 'MYPAGE',
    score: 3,
    userName: '럽윈즈올',
    userProfileImage: '/assets/profile.svg',
    comment:
      '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.',
    gatheringType: '오피스 스트레칭',
    gatheringLocation: '을지로3가',
    createdDate: '2024.01.25',
  },
};
export const Reviews: Story = {
  args: {
    page: 'GATHERING_DETAIL',
    score: 3,
    userName: '럽윈즈올',
    userProfileImage: '/assets/profile.svg',
    comment:
      '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.',
    gatheringType: '오피스 스트레칭',
    gatheringLocation: '을지로3가',
    createdDate: '2024.01.25',
  },
};

export const Search: Story = {
  args: {
    page: 'ALL_REVIEWS',
    score: 3,
    userName: '럽윈즈올',
    userProfileImage: '/assets/profile.svg',
    comment:
      '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.',
    gatheringType: '오피스 스트레칭',
    gatheringLocation: '을지로3가',
    createdDate: '2024.01.25',
  },
};
