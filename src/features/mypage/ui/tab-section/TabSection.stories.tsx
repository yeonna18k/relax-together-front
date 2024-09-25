import type { Meta, StoryObj } from '@storybook/react';
import TabSection from './index';

const meta: Meta<typeof TabSection> = {
  title: 'Entities/ui/TabSection',
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
