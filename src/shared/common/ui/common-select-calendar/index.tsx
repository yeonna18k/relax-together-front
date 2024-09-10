'use client';
import { Calendar } from '@/shared/ui/calendar';
import { useState } from 'react';

export default function CommonSelectCalendar() {
  const [date, setDate] = useState<Date>();
  return (
    <div>
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
}
