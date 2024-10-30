import { dummyReviews } from '@/shared/fixture/reviews';
import { REVIEWS_PER_PAGE } from '@/shared/lib/constants';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import PaginationReviews, { PaginationReviewsProps } from '.';

const meta = {
  title: 'Features/ui/PaginationReviews',
  component: PaginationReviews,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
  },
} satisfies Meta<typeof PaginationReviews>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: PaginationReviewsProps) => {
  const [currentPage, setCurrentPage] = useState<number>(args.currentPage || 0);

  const start = currentPage * REVIEWS_PER_PAGE;
  const end = start + REVIEWS_PER_PAGE;

  const paginatedReviews = {
    ...dummyReviews,
    reviews: dummyReviews.reviews.slice(start, end),
  };

  return (
    <PaginationReviews
      {...args}
      reviewList={paginatedReviews}
      currentPage={currentPage}
      setCurrentPage={page => setCurrentPage(page)}
    />
  );
};

export const Default: Story = {
  render: args => <Template {...args} />,
  args: {
    reviewList: dummyReviews,
    currentPage: 0,
    setCurrentPage: () => {},
    totalPages: Math.ceil(dummyReviews.totalElements / REVIEWS_PER_PAGE),
  },
};
