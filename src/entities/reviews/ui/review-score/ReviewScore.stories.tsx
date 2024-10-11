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
      // : [
      //   rest.get(`/api/reviews/scores`, (req, res, ctx) => {
      //     const type = '달램핏';
      //     return res(
      //       ctx.json({
      //         fivePoints: 27,
      //         fourPoints: 19,
      //         threePoints: 2,
      //         twoPoints: 0,
      //         onePoints: 0,
      //         type,
      //       }),
      //     );
      //   }),
      // ],
    },
  },
  render: function Render() {
    return <ReviewScore />;
  },
};
