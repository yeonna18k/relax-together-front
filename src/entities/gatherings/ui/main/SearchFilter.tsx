'use client';
import CommonSelect from '@/shared/common/ui/common-select';
import DatePicker from '@/shared/common/ui/date-picker';
import {
  commonSelectItems,
  commonSortItems,
} from '@/shared/fixture/select-items';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';

export default function SearchFilter() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedValue, setSelectedValue] = useState<string>('ALL');
  const [selectedSortValue, setSelectedSortValue] =
    useState<string>('DUE_DATE');
  const [selectedFilterButton, setSelectedFilterButton] =
    useState<string>('ALL');

  return (
    <div className="flex w-full flex-col-reverse sm:my-4 sm:flex-row sm:items-center sm:justify-between sm:p-2 md:flex-row md:items-center md:justify-between xl:w-[966px]">
      <div className="flex justify-between gap-1.5 py-[12px] sm:py-0 md:gap-2">
        <div className="flex gap-1.5 md:gap-2">
          <CommonSelect
            filterIconType="default"
            menuItems={commonSelectItems}
            onValueChange={value => setSelectedValue(value)}
            placeholder="지역 전체"
            selectedValue="ALL"
          />
          <DatePicker date={date} setDate={setDate} />
        </div>
        <CommonSelect
          filterIconType="sort"
          menuItems={commonSortItems}
          onValueChange={value => setSelectedSortValue(value)}
          placeholder="마감 임박"
          selectedValue="DUE_DATE"
        />
      </div>
      <div className="flex gap-2 border-b-2 border-gray-200 py-[14px] sm:border-none sm:py-0">
        <Button
          className={`h-8 w-[54px] rounded-md lg:h-10 ${selectedFilterButton === 'ALL' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedFilterButton('ALL')}
          size="sm"
          variant="ghost"
        >
          전체
        </Button>
        <Button
          className={`h-8 rounded-md lg:h-10 ${selectedFilterButton === 'STRETCHING' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedFilterButton('STRETCHING')}
          size="sm"
          variant="ghost"
        >
          오피스 스트레칭
        </Button>
        <Button
          className={`h-8 rounded-md lg:h-10 ${selectedFilterButton === 'MINDFULNESS' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedFilterButton('MINDFULNESS')}
          size="sm"
          variant="ghost"
        >
          마인드풀니스
        </Button>
      </div>
    </div>
  );
}
