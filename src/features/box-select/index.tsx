'use client';
import { cn } from '@/shared/lib/utils';
import { Checkbox } from '@/shared/ui/checkbox';
import { useState } from 'react';

interface BoxSelectProps {
  group: string;
  text?: string;
}

export default function BoxSelect({ group, text }: BoxSelectProps) {
  const [isChecked, setIsChecked] = useState(false);

  const checkedChangeHandler = (checked: boolean) => {
    setIsChecked(checked);
  };
  return (
    <div
      className={cn(
        `flex h-[76px] w-full min-w-[109px] max-w-40 items-start gap-[2px] break-keep rounded-lg pb-[14px] pl-2 pr-5 pt-[6px] md:h-[70px] md:gap-2 md:pb-[14px] md:pl-4 md:pr-5 md:pt-3`,
        { 'bg-gray-900': isChecked, 'bg-gray-50': !isChecked },
      )}
    >
      <Checkbox checked={isChecked} onCheckedChange={checkedChangeHandler} />
      <div className="flex flex-col gap-1 md:gap-[2px]">
        <div
          className={`text-sm font-semibold md:text-base ${isChecked ? '' : 'text-gray-900'}`}
        >
          {group}
        </div>
        <div
          className={`text-xs font-medium ${isChecked ? '' : '!text-gray-700'}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
