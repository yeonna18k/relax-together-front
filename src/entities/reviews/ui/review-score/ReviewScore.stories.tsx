import handlers from '@/shared/mocks/handlers';
import { Meta, StoryObj } from '@storybook/react';
import ReviewScore from './index';

const meta: Meta<typeof ReviewScore> = {
  title: 'Entities/Reviews/ui/ReviewScore',
  component: ReviewScore,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ReviewScore>;
export const Default: Story = {
  parameters: {
    msw: {
      handlers,
    },
  },
  render: function Render() {
    return <ReviewScore />;
  },
};
