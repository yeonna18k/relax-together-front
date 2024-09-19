import { localStorageForStorybook } from '@alexgorbatchev/storybook-addon-localstorage';
import type { Meta, StoryObj } from '@storybook/react';
import TopTap from './index';

const meta = {
  title: 'Shared/ui/TopTap',
  component: TopTap,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'orange',
      values: [{ name: 'orange', value: '#ea580c' }],
    },
    localStorage: localStorageForStorybook({
      'like-gatherings-count': '1000',
    }),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TopTap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    path: '/gatherings',
    name: '모임 찾기',
  },
  parameters: {
    localStorage: localStorageForStorybook({
      'like-gatherings-count': '0',
    }),
  },
};

export const WithBadgeDefaultCount: Story = {
  args: {
    path: '/like-gatherings',
    name: '찜한 모임',
  },
  parameters: {
    localStorage: localStorageForStorybook({
      'like-gatherings-count': '1',
    }),
  },
};

export const WithBadgeOverCount: Story = {
  args: {
    path: '/like-gatherings',
    name: '찜한 모임',
  },
  parameters: {
    localStorage: localStorageForStorybook({
      'like-gatherings-count': '1000',
    }),
  },
};
