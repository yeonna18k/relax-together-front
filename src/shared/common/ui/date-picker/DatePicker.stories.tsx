import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import DatePicker from './index';

const meta = {
  title: 'Shared/ui/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>(undefined);

    return <DatePicker date={date} setDate={setDate} />;
  },
  args: {
    date: undefined,
    setDate: () => {},
  },
};
