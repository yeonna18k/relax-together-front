import ButtonGroup from '@/shared/common/ui/popup-calendar/ButtonGroup';
import { Calendar } from '@/shared/ui/calendar';
import { useState } from 'react';

interface PopupCalendarProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  setOpen?: (open: boolean) => void;
}
export default function PopupCalendar({
  date,
  setDate,
  setOpen,
}: PopupCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(date);

  const handleSubmit = () => {
    setDate(selectedDate);
    setOpen && setOpen(false);
  };

  const handleReset = () => {
    setSelectedDate(undefined);
    setDate(undefined);
    setOpen && setOpen(false);
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
