import handlers from '@/shared/mocks/handlers';
import type { Meta, StoryObj } from '@storybook/react';
import SubPage from './index';

const meta: Meta<typeof SubPage> = {
  title: 'Features/Mypage/ui/SubPage',
  component: SubPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: Story => (
    <div className="w-full md:w-[996px]">
      <Story />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SubPage>;

export const Default: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/mypage',
        query: { subPage: 'my-gatherings' },
      },
    },
    msw: {
      handlers,
    },
  },
  render: function Render() {
    return <SubPage />;
  },
};

export const MyWrittenReviewInSubPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/mypage',
        query: { subPage: 'my-reviews', filter: 'written' },
      },
    },
    msw: {
      handlers,
    },
  },
  render: function Render() {
    return <SubPage />;
  },
};

export const MyPendingReviewInSubPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/mypage',
        query: { subPage: 'my-reviews', filter: 'pending' },
      },
    },
    msw: {
      handlers,
    },
  },
  render: function Render() {
    return <SubPage />;
  },
};

export const MyHostedGatheringsInSubPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/mypage',
        query: { subPage: 'my-hosted-gatherings' },
      },
    },
    msw: {
      handlers,
    },
  },
  render: function Render() {
    return <SubPage />;
  },
};
