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
    <div className="mt-10 flex justify-between xl:w-[966px]">
      <div className="flex gap-4">
        <CommonSelect
          filterIconType="default"
          menuItems={commonSelectItems}
          onValueChange={value => setSelectedValue(value)}
          placeholder="지역 전체"
          selectedValue="ALL"
        />
        <DatePicker date={date} setDate={setDate} />
        <CommonSelect
          filterIconType="sort"
          menuItems={commonSortItems}
          onValueChange={value => setSelectedSortValue(value)}
          placeholder="마감 임박"
          selectedValue="DUE_DATE"
        />
      </div>
      <div className="flex gap-2">
        <Button
          className={`w-[54px] rounded-xl ${selectedFilterButton === 'ALL' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedFilterButton('ALL')}
          size="sm"
          variant="ghost"
        >
          전체
        </Button>
        <Button
          className={`rounded-xl ${selectedFilterButton === 'STRETCHING' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedFilterButton('STRETCHING')}
          size="sm"
          variant="ghost"
        >
          오피스 스트레칭
        </Button>
        <Button
          className={`rounded-xl ${selectedFilterButton === 'MINDFULNESS' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
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
