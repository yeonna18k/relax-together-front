import { Meta, StoryObj } from '@storybook/react';

import SliderButton from './index';

const meta = {
  title: 'Shared/ui/SlideButton',
  component: SliderButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SliderButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
