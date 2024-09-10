'use client';
import CommonSelect from '@/shared/common/ui/common-select';
import CommonSelectCalendar from '@/shared/common/ui/common-select-calendar';
import CommonSelectContent from '@/shared/common/ui/common-select-content';
import CommonSelectItems from '@/shared/common/ui/common-select-items';
import { commonSelectItems } from '@/shared/fixture/select-items';

import { useState } from 'react';

export default function Home() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex min-h-screen flex-col items-center gap-5 p-24 text-black">
      <h1>메인 페이지</h1>
      <CommonSelect
        placeholder="지역 전체"
        onValueChange={handleValueChange}
        selectedValue={selectedValue}
      >
        <CommonSelectContent>
          <CommonSelectItems menuItems={commonSelectItems} />
        </CommonSelectContent>
      </CommonSelect>
      <CommonSelect
        placeholder="날짜 전체"
        onValueChange={handleValueChange}
        selectedValue={selectedValue}
      >
        <CommonSelectContent>
          <CommonSelectCalendar />
        </CommonSelectContent>
      </CommonSelect>
    </div>
  );
}
