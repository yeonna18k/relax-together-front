import type { Meta, StoryObj } from '@storybook/react';
import TabSection from './index';

const meta: Meta<typeof TabSection> = {
  title: 'Entities/Mypage/ui/TabSection',
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

export const MyReviewInSubPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/mypage',
        query: { subPage: 'my-reviews', filter: 'completed' },
      },
    },
  },
  render: function Render() {
    return <TabSection />;
  },
};

export const MyCreatedGatheringsInSubPage: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: '/mypage',
        query: { subPage: 'my-created-gatherings' },
      },
    },
  },
  render: function Render() {
    return <TabSection />;
  },
};
