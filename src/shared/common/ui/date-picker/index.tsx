'use client';

import PopupCalendar from '@/shared/common/ui/popup-calendar';
import { Device } from '@/shared/lib/constants';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { useWindowSize } from 'usehooks-ts';

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

/**
 * @description DatePicker 컴포넌트
 * @author Charles
 * @param {DatePickerProps} { date, setDate }
 */
export default function DatePicker({ date, setDate }: DatePickerProps) {
  const { width = 0 } = useWindowSize();
  const [open, setOpen] = useState(false);

  const triggerStyles =
    date === undefined
      ? 'bg-white text-gray-900 hover:bg-white active:bg-white'
      : 'bg-gray-900 text-white hover:bg-gray-900 active:bg-gray-900';
  const isMobile = width <= Device.mobile;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'flex w-[120px] items-center justify-between rounded-xl border-2 border-gray-100 px-3 py-2 text-sm',
            triggerStyles,
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'yy/MM/dd') : <span>날짜 선택</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto bg-white p-0"
        align={isMobile ? 'center' : 'start'}
      >
        <PopupCalendar date={date} setDate={setDate} setOpen={setOpen} />
      </PopoverContent>
    </Popover>
  );
}
