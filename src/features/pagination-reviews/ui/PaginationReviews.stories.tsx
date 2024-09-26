import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Pagination, { PaginationReviewsProps } from './index';

const meta = {
  title: 'Features/ui/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: PaginationReviewsProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      setCurrentPage={page => {
        setCurrentPage(page);
      }}
    />
  );
};

export const Default: Story = {
  render: args => <Template {...args} />,
  args: {
    reviewList: {
      content: [], // 빈 배열로 기본값 설정
      currentPage: 1,
      totalPages: 0,
      totalElements: 0,
    },
    currentPage: 1,
    setCurrentPage: () => {},
    totalPages: 9,
    getReviewData: (page: number) => {},
  },
};
