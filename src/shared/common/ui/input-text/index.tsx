'use client';

import { Textarea, TextareaProps } from '@/shared/ui/textarea';
import { ChangeEvent, useState } from 'react';

interface InputTextProps extends TextareaProps {
  placeholder?: string;
}

export default function InputText({ placeholder }: InputTextProps) {
  const [value, setValue] = useState<string>('');

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
