'use client';

import { cn } from '@/shared/lib/utils';
import { Textarea, TextareaProps } from '@/shared/ui/textarea';
import { ChangeEvent, useState } from 'react';

type Props = {
  className?: string;
} & TextareaProps;

export default function InputText({ className, ...props }: Props) {
  const [value, setValue] = useState<string>('');

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Textarea
      className={cn(
        'h-[120px] w-[295px] resize-none rounded-xl border-none bg-gray-50 px-4 py-[10px] text-base font-medium text-gray-800 custom-scrollbar placeholder:text-gray-400 sm:w-[471px]',
        className,
      )}
      placeholder="할 일의 제목을 적어주세요."
      value={value}
      onChange={handleOnChange}
      {...props}
    />
  );
}
