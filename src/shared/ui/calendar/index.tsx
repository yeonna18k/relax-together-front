'use client';

import * as React from 'react';
import { DayPicker, Formatters } from 'react-day-picker';

import ChevronLeft from '@/shared/assets/icons/chevron-left.svg';
import ChevronRight from '@/shared/assets/icons/chevron-right.svg';
import { cn } from '@/shared/lib/utils';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        outline: 'bg-background text-accent-foreground',
        ghost: 'text-black hover:bg-green-500 hover:text-white cursor-pointer',
      },
    },
  },
);

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/**
 * @description 공용 캘린더 컴포넌트
 * @author Charles
 * @example
 * const [date, setDate] = useState<Date>();
 * <Calendar mode="single" selected={date} onSelect={setDate} />
 */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const formatters: Partial<Formatters> = {
    formatWeekdayName: (weekday: Date): string => {
      const weekdayNames: string[] = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
      ];
      return weekdayNames[weekday.getDay()];
    },
  };
  return (
    <DayPicker
      formatters={formatters}
      showOutsideDays={showOutsideDays}
      className={cn('', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: '',
        caption: 'flex justify-center py-[5px] relative items-center',
        caption_label: 'text-sm font-medium text-black',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'outline' }),
          'h-6 w-6 bg-transparent p-0',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-black rounded-md w-9 h-8 font-semibold text-[0.8rem] flex items-center justify-center',
        row: 'flex w-full',
        cell: 'h-8 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-8 w-9 p-0 font-medium aria-selected:opacity-100',
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-white text-green-500 hover:bg-green-500 hover:text-white focus:bg-green-500 focus:text-white aria-selected:bg-green-500 aria-selected:text-white',
        day_today:
          'bg-white text-green-500 aria-selected:bg-green-500 aria-selected:text-white',
        day_outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-green-500 aria-selected:text-white aria-selected:opacity-30',
        day_disabled: 'text-gray-400 opacity-50',
        day_range_middle: 'aria-selected:bg-green-500 aria-selected:text-white',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-6 w-6" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-6 w-6" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
