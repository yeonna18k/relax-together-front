import { SwitchFiler } from '@/features/gatherings/model/create-gathring';
import {
  FUTURE_BASE_CREATE_HOURS,
  FUTURE_CREATE_DATE,
  IS_MEETING_CREATION_ALLOWED,
  NOW,
  NOW_BASE_CREATE_HOURS,
} from '@/shared/lib/constants';
import { useEffect, useState } from 'react';

export default function useSelectDateTime(filter: SwitchFiler) {
  const [selectedDate, setSelectedDate] = useState<Date>(NOW);
  const [selectedTime, setSelectedTime] = useState<string>(
    String(NOW_BASE_CREATE_HOURS + 1),
  );

  useEffect(() => {
    // 현재 시간이 오후 3시 이후고, 선택된 날짜가 오늘(NOW)인 경우
    if (!IS_MEETING_CREATION_ALLOWED && selectedDate === NOW) {
      setSelectedDate(FUTURE_CREATE_DATE);
      setSelectedTime(String(FUTURE_BASE_CREATE_HOURS));
    }
    if (IS_MEETING_CREATION_ALLOWED) {
      setSelectedTime(String(NOW_BASE_CREATE_HOURS + 1));
    }
  }, [selectedDate, filter]);

  return {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  };
}
