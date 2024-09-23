'use client';

import { Textarea, TextareaProps } from '@/shared/ui/textarea';
import { ChangeEvent } from 'react';

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
  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Textarea
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
}
