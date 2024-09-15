import type { Meta, StoryObj } from '@storybook/react';
import Logo from './index';

const meta = {
  title: 'Shared/ui/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'orange',
      values: [{ name: 'orange', value: '#ea580c' }],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
