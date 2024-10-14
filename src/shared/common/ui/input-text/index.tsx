'use client';

import { MAX_REVIEW_TEXT_COUNT } from '@/shared/lib/constants';
import { Textarea, TextareaProps } from '@/shared/ui/textarea';
import { ChangeEvent, useState } from 'react';

interface InputTextProps extends TextareaProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

export default function InputText({
  value,
  setValue,
  placeholder,
}: InputTextProps) {
  const [textCount, setTextCount] = useState(0);
  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > MAX_REVIEW_TEXT_COUNT) return;
    setValue(e.target.value);
    setTextCount(e.target.value.length);
  };
  const textColor =
    textCount >= MAX_REVIEW_TEXT_COUNT ? 'text-red-400' : 'text-gray-400';
  return (
    <div className="relative rounded-xl bg-gray-50 pb-2">
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      <p className={`absolute bottom-2 right-4 text-sm ${textColor}`}>
        ({textCount}/{MAX_REVIEW_TEXT_COUNT})
      </p>
    </div>
  );
}
