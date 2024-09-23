'use client';
import Check from '@/shared/common/ui/check';
import ChipTime from '@/shared/common/ui/chip-time';
import CommonInput from '@/shared/common/ui/common-input';
import PopupCalendar from '@/shared/common/ui/popup-calendar';
import { Button } from '@/shared/ui/button';
import { useState } from 'react';
import PhotoUpload from './ModalPhoto';

export default function GatheringModal() {
  const [selectedFilterButtons, setSelectedFilterButtons] =
    useState<string>('ALL');
  return (
    <div>
      <div className="h-[400px] w-[450px] overflow-y-auto border border-gray-300 p-4">
        <div className="h-[1000px]"></div>
        <div className="flex gap-2">
          <Button
            className={`onclick(closeModal) rounded-xl ${selectedFilterButtons === 'STRETCHING' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
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
          <PhotoUpload />
        </div>
        <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">날짜</p>
        <div>
          <PopupCalendar setDate={() => {}} />
          <p className="text-black">현재 선택된 날짜: </p>
        </div>
        <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">오전</p>
        <ChipTime hour={9} minute={0} state="enabled" />
        <ChipTime hour={10} minute={0} state="enabled" />
        <ChipTime hour={11} minute={0} state="enabled" />
        <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">오후</p>
        <ChipTime hour={12} minute={0} state="enabled" />
        <ChipTime hour={13} minute={0} state="enabled" />
        <ChipTime hour={14} minute={0} state="enabled" />
        <ChipTime hour={15} minute={0} state="enabled" />
        <ChipTime hour={16} minute={0} state="enabled" />
        <ChipTime hour={17} minute={0} state="enabled" />

        <p className="mb-3 mt-6 text-2xl font-semibold text-gray-800">
          모집 정원
        </p>
      </div>
    </div>
  );
}
