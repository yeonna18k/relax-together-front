'use client';
import DatePicker from '@/shared/common/ui/date-picker';
import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24">
      메인 페이지
      <DatePicker date={date} setDate={setDate} />
    </div>
  );
}
