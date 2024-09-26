import type { Meta, StoryObj } from '@storybook/react';
import TabSection from './index';

const meta: Meta<typeof TabSection> = {
  title: 'Features/Mypage/ui/TabSection',
  component: TabSection,
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

type Story = StoryObj<typeof TabSection>;

export const Default: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/mypage',
        query: { subPage: 'my-gatherings' },
      },
    },
  },
  render: function Render() {
    return <TabSection />;
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
  },
  render: function Render() {
    return <TabSection />;
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
  },
  render: function Render() {
    return <TabSection />;
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
  },
  render: function Render() {
    return <TabSection />;
  },
};
