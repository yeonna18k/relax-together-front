'use client';

import Check from '@/shared/common/ui/check';
import ChipTime, { ChipTimeProps } from '@/shared/common/ui/chip-time';
import CommonInput from '@/shared/common/ui/common-input';
import CommonSelect from '@/shared/common/ui/common-select';
import { commonSelectItems } from '@/shared/fixture/select-items';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { useState } from 'react';
import FileUpload from './FileUpLoad';

export default function GatheringModalContent() {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedValue, setSelectedValue] = useState<string>('ALL');
  const [inputValue, setInputValue] = useState('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const morningTimes: Array<ChipTimeProps> = [
    { hour: 9, minute: 0, state: 'enabled' },
    { hour: 10, minute: 0, state: 'enabled' },
    { hour: 11, minute: 0, state: 'enabled' },
  ];

  const afternoonTimes: Array<ChipTimeProps> = [
    { hour: 12, minute: 0, state: 'enabled' },
    { hour: 13, minute: 0, state: 'enabled' },
    { hour: 14, minute: 0, state: 'enabled' },
    { hour: 15, minute: 0, state: 'enabled' },
    { hour: 16, minute: 0, state: 'enabled' },
    { hour: 17, minute: 0, state: 'enabled' },
    { hour: 18, minute: 0, state: 'enabled' },
  ];

  const validateForm = () => {
    if (inputValue && selectedDate) {
      setIsFormValid(true);
      setIsFormValid(false);
    } else {
    }
  };

  const handleSubmit = () => {
    if (!isFormValid) return;

    const formData = {
      filter: selectedFilter,
      date: selectedDate,
      input: inputValue,
    };
  };

  return (
    <div className="h-auto max-h-[80vh] w-full space-y-6 overflow-y-auto">
      <div className="flex w-full gap-3">
        <Button
          className={`h-[48px] w-full rounded-md ${selectedFilter === 'STRETCHING' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          size="sm"
          onClick={() => setSelectedFilter('STRETCHING')}
          variant="ghost"
        >
          달램핏
        </Button>
        <Button
          className={`h-[48px] w-full rounded-md ${selectedFilter === 'MINDFULNESS' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedFilter('MINDFULNESS')}
          size="sm"
          variant="ghost"
        >
          워케이션
        </Button>
      </div>

      <p className="mb-3 mt-6 text-sm font-semibold text-gray-800">
        선택 서비스
      </p>
      <div className="flex h-[48px] w-[472px] flex-none flex-grow-0 items-start gap-16 self-stretch p-0 text-sm font-semibold text-gray-900 md:flex-row md:text-lg">
        <div className="flex items-center md:my-3 md:ml-4 md:mr-5 md:gap-2">
          <Check participantCount={5} />
          <p>오피스 스트레칭</p>
        </div>
        <div className="flex items-center md:my-3 md:ml-5 md:mr-4 md:gap-2">
          <Check participantCount={5} />
          <p>마인드풀니스</p>
        </div>
      </div>

      <p className="mb-3 mt-6 text-sm font-semibold text-gray-800 md:text-2xl">
        장소
      </p>
      <CommonSelect
        size="lg"
        filterIconType="default"
        menuItems={commonSelectItems}
        onValueChange={value => setSelectedValue(value)}
        placeholder="장소를 선택해주세요"
        selectedValue="ALL"
      />

      <p className="mb-3 mt-6 text-sm font-semibold text-gray-800 md:text-2xl">
        이미지
      </p>
      <div className="flex w-full gap-2">
        <FileUpload />
      </div>

      <p className="mb-3 mt-6 text-sm font-semibold text-gray-800 md:text-2xl">
        날짜
      </p>
      <div className="flex w-full justify-center">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={date => {
            setSelectedDate(date);
            validateForm();
          }}
        />
      </div>

      <div>
        <p className="text-sm font-semibold text-gray-800 md:mb-3 md:mt-6 md:text-2xl">
          오전
        </p>
        {morningTimes.map((time, index) => (
          <ChipTime
            key={index}
            hour={time.hour}
            minute={time.minute}
            state={time.state}
          />
        ))}

        <p className="text-sm font-semibold text-gray-800 md:mb-3 md:mt-6 md:text-2xl">
          오후
        </p>
        <div>
          {afternoonTimes.slice(0, 5).map((time, index) => (
            <ChipTime
              key={index}
              hour={time.hour}
              minute={time.minute}
              state={time.state}
            />
          ))}
        </div>
        {afternoonTimes.slice(5).map((time, index) => (
          <ChipTime
            key={index}
            hour={time.hour}
            minute={time.minute}
            state={time.state}
          />
        ))}
      </div>
      <p className="text-sm font-semibold text-gray-800 md:mb-3 md:mt-6 md:text-2xl">
        모집 정원
      </p>
      <CommonInput
        iconType="default"
        placeholder="최소 5인 이상 입력해주세요."
        size="small"
      />
    </div>
  );
}
