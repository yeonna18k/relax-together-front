'use client';

import { MAX_REVIEW_TEXT } from '@/shared/lib/constants';
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
    if (e.target.value.length > MAX_REVIEW_TEXT) return;
    setValue(e.target.value);
    setTextCount(e.target.value.length);
  };
  const textColor =
    textCount >= MAX_REVIEW_TEXT ? 'text-red-500' : 'text-gray-300';
  return (
    <div className="relative rounded-xl bg-gray-50 pb-2">
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
      <p className={`absolute bottom-0 right-2 ${textColor}`}>
        {textCount} / {MAX_REVIEW_TEXT}자
      </p>
    </div>
  );
}
