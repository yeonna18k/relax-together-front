import { useState } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';
import PopupCalendar from './index';

const meta: Meta<typeof PopupCalendar> = {
  title: 'Shared/ui/PopupCalendar',
  component: PopupCalendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PopupCalendar>;

export const WithState: Story = {
  render: function Render(args) {
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
      <div>
        <PopupCalendar date={date} setDate={setDate} />
        <p className="text-black">현재 선택된 날짜: {date?.toLocaleString()}</p>
      </div>
    );
  },
};
