import { SwitchFiler } from '@/features/gatherings/model/create-gathring';
import {
  FUTURE_CREATE_DATE,
  FUTURE_CREATE_HOUR,
  NOW,
  NOW_BASE_CREATE_DATE,
  NOW_BASE_CREATE_HOUR,
} from '@/shared/lib/constants';
import { useEffect, useState } from 'react';

export default function useSelectDateTime(filter: SwitchFiler) {
  const [selectedDate, setSelectedDate] = useState<Date>(NOW);
  // TODO: 현재 날짜와 선택된 날짜를 비교해서 미래의 날짜가 선택되었을 경우 9시를 활성화, 아닐 경우 현재 시간의 3시간 이후의 시간부터 활성화
  const [selectedTime, setSelectedTime] = useState<string>(
    String(NOW_BASE_CREATE_HOUR),
  );

  useEffect(() => {
    if (NOW > NOW_BASE_CREATE_DATE) {
      setSelectedDate(FUTURE_CREATE_DATE);
      setSelectedTime(String(FUTURE_CREATE_HOUR));
    }
  }, [filter]);

  return { selectedDate, setSelectedDate, selectedTime, setSelectedTime };
}
