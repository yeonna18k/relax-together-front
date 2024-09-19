'use client';
import CommonSelect from '@/shared/common/ui/common-select';
import DatePicker from '@/shared/common/ui/date-picker';
import { useState } from 'react';

export default function SearchFilter() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedValue, setSelectedValue] = useState<string>('ALL');

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div className="mt-12 text-black">
      <div className="flex gap-4">
        <CommonSelect
          filterIconType="default"
          placeholder="Select an option"
          menuItems={[{ label: '서울', value: 'seoul' }]}
          onValueChange={handleValueChange}
          selectedValue={selectedValue}
        />
        <DatePicker date={date} setDate={setDate} />
      </div>
    </div>
  );
}
