import ButtonGroup from '@/shared/common/ui/popup-calendar/ButtonGroup';
import { Calendar } from '@/shared/ui/calendar';
import { useState } from 'react';

interface PopupCalendarProps {
  setDate: (date: Date | undefined) => void;
}
export default function PopupCalendar({ setDate }: PopupCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleSubmit = () => {
    setDate(selectedDate);
  };

  const handleReset = () => {
    setSelectedDate(undefined);
    setDate(undefined);
  };

  return (
    <div className="flex flex-col space-y-3 rounded-lg px-[53px] py-6">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
      />
      <ButtonGroup handleReset={handleReset} handleSubmit={handleSubmit} />
    </div>
  );
}
