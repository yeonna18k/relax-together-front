import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Pagination, { PaginationComponentProps } from './index';

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

const Template = (args: PaginationComponentProps) => {
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
    reviewList: [],
    currentPage: 1,
    setCurrentPage: () => {},
    totalPages: 9,
    getReviewData: (page: number) => {},
  },
};
