'use client';
import { Calendar } from '@/shared/ui/calendar/index';
import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState<Date>();
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24 text-black">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
}
