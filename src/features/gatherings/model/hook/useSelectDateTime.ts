import { SwitchFiler } from '@/features/gatherings/model/create-gathring';
import {
  FUTURE_CREATE_HOUR,
  NOW,
  NOW_BASE_CREATE_DATE,
  NOW_BASE_CREATE_HOUR,
} from '@/shared/lib/constants';
import { useEffect, useState } from 'react';

export default function useSelectDateTime(filter: SwitchFiler) {
  const [selectedDate, setSelectedDate] = useState<Date>(NOW);
  const [selectedTime, setSelectedTime] = useState<string>(
    String(NOW_BASE_CREATE_HOUR),
  );

  // 현재 시간 기준으로 3시간 이후의 시간을 계산하는 함수
  const getThreeHoursLater = () => {
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + 3); // 현재 시간에서 3시간 더함
    return currentTime.getHours(); // 시간만 반환
  };

  // 현재 시간이 16시(오후 4시) 이후인지 확인
  const isAfter4PM = () => {
    const currentTime = new Date();
    return currentTime.getHours() >= 13; // 16시(오후 4시) 이후인지 확인
  };

  useEffect(() => {
    // 현재 시간이 16시 이후일 경우 오늘 날짜를 비활성화하고 다음날로 설정
    if (isAfter4PM() && selectedDate === NOW) {
      const tomorrow = new Date();
      tomorrow.setDate(NOW.getDate() + 1);
      setSelectedDate(tomorrow); // 선택 날짜를 다음날로 설정
      setSelectedTime('09'); // 오전 9시로 설정
    } else if (selectedDate > NOW_BASE_CREATE_DATE) {
      // 선택된 날짜가 현재보다 미래일 경우 9시로 설정
      setSelectedTime(String(FUTURE_CREATE_HOUR));
    } else {
      // 현재 날짜일 경우 현재 시간 기준으로 3시간 이후의 시간으로 설정
      const threeHoursLater = getThreeHoursLater();
      if (selectedTime !== String(threeHoursLater)) {
        setSelectedTime(String(threeHoursLater));
      }
    }
  }, [selectedDate, filter]);

  // 오늘의 시간 선택이 불가능한지 확인 (16시 이후라면)
  const isTodayDisabled = isAfter4PM();

  return {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    isTodayDisabled, // 오늘 시간이 선택 불가능한지 여부
  };
}
