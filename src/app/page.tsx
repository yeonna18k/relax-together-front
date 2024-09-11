'use client';
import CommonSelect from '@/shared/common/ui/common-select';
import { commonSelectItems } from '@/shared/fixture/select-items';
import { useState } from 'react';

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string>('ALL');

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24">
      메인 페이지
      <CommonSelect
        filterIconType="default"
        placeholder="지역 전체"
        menuItems={commonSelectItems}
        onValueChange={handleValueChange}
        selectedValue={selectedValue}
      />
    </div>
  );
}
