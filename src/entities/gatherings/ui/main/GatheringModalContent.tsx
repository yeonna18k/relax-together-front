'use client';
import Check from '@/shared/common/ui/check';

import ChipTime, { ChipTimeProps } from '@/shared/common/ui/chip-time';
import CommonInput from '@/shared/common/ui/common-input';
import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';
import { useState } from 'react';
import FileUpload from './FileUpLoad';

export default function GatheringModalContent() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedFilterButtons, setSelectedFilterButtons] =
    useState<string>('ALL');

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
  ];

  return (
    <div className="max-h-[700px] overflow-y-auto">
      <div className="flex gap-2">
        <Button
          className={`rounded-xl ${selectedFilterButtons === 'STRETCHING' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedFilterButtons('STRETCHING')}
          size="lg"
          variant="ghost"
        >
          달램핏
        </Button>
        <Button
          className={`rounded-xl ${selectedFilterButtons === 'MINDFULNESS' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setSelectedFilterButtons('MINDFULNESS')}
          size="lg"
          variant="ghost"
        >
          워케이션
        </Button>
      </div>

      <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">
        선택 서비스
      </p>
      <div className="flex justify-between gap-3 text-2xl font-semibold text-gray-900">
        <div className="my-3 ml-4 mr-5 flex items-center gap-2">
          <Check participantCount={5} />
          <p>오피스 스트레칭</p>
        </div>
        <div className="my-3 ml-5 mr-4 flex items-center gap-2">
          <Check participantCount={5} />
          <p>마인드풀니스</p>
        </div>
      </div>

      <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">장소</p>
      <CommonInput
        iconType="dropdown"
        placeholder="장소를 선택해주세요"
        size="large"
      />

      <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">이미지</p>
      <div className="flex w-[360px] gap-2">
        <FileUpload />
      </div>

      <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">날짜</p>
      <div className="flex w-full justify-center">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      </div>

      <div>
        <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">오전</p>
        {morningTimes.map((time, index) => (
          <ChipTime
            key={index}
            hour={time.hour}
            minute={time.minute}
            state={time.state}
          />
        ))}

        <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">오후</p>
        {afternoonTimes.map((time, index) => (
          <ChipTime
            key={index}
            hour={time.hour}
            minute={time.minute}
            state={time.state}
          />
        ))}
      </div>

      <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">
        모집 정원
      </p>
    </div>
  );
}
