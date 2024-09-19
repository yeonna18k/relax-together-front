import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';

const meta: Meta<typeof Header> = {
  title: 'Features/ui/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: function Render() {
    return <Header />;
  },
};
