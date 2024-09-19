'use client';
import CommonButton from '@/shared/common/ui/common-button';
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
    <div>
      <div className="mt-12 flex justify-between">
        <div className="flex gap-4">
          <CommonSelect
            filterIconType="default"
            menuItems={[
              {
                label: '지역 전체',
                value: 'ALL',
              },
              {
                label: '건대입구',
                value: '건대입구',
              },
              {
                label: '을지로 3가',
                value: '을지로 3가',
              },
              {
                label: '신림',
                value: '신림',
              },
              {
                label: '홍대입구',
                value: '홍대입구',
              },
            ]}
            onValueChange={() => {}}
            placeholder="지역 전체"
            selectedValue="ALL"
          />
          <DatePicker date={date} setDate={setDate} />
        </div>
        <div className="flex gap-2">
          <CommonButton
            className="bg-gray-900"
            onClick={() => {}}
            size="sm"
            variant="default"
          >
            전체
          </CommonButton>
          <CommonButton
            className="bg-[#626262]"
            onClick={() => {}}
            size="sm"
            variant="default"
          >
            오피스 스트레칭
          </CommonButton>
          <CommonButton
            className="bg-[#626262]"
            onClick={() => {}}
            size="sm"
            variant="default"
          >
            마인드풀니스
          </CommonButton>
        </div>
      </div>
    </div>
  );
}
