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

  // 9시간을 더해 KST로 변환하는 함수
  const utcToKst = (date: Date) => {
    const kstOffset = 9 * 60 * 60 * 1000; // 9시간을 밀리초로 변환
    return new Date(date.getTime() + kstOffset);
  };

  // 3시간 후의 시간을 KST 기준으로 계산
  const getThreeHoursLater = () => {
    const currentTime = new Date();
    const kstTime = utcToKst(currentTime); // UTC 시간에서 KST 시간으로 변환
    kstTime.setHours(kstTime.getHours() + 3); // KST 기준으로 3시간 더하기
    return kstTime.getHours(); // KST 시간 반환
  };

  // 현재 시간이 KST 기준 오후 4시 이후인지 확인
  const isAfter4PM = () => {
    const currentTime = new Date();
    const kstTime = utcToKst(currentTime); // UTC 시간에서 KST 시간으로 변환
    return kstTime.getHours() >= 16; // KST 기준으로 오후 4시 이후인지 확인
  };

  useEffect(() => {
    // 현재 시간이 오후 4시 이후고, 선택된 날짜가 오늘(NOW)인 경우
    if (isAfter4PM() && selectedDate === NOW) {
      const tomorrow = new Date();
      const kstTomorrow = utcToKst(tomorrow); // UTC 시간에서 KST 시간으로 변환
      kstTomorrow.setDate(NOW.getDate() + 1); // KST 기준으로 하루 더하기
      setSelectedDate(kstTomorrow);
      setSelectedTime('09');
    } else if (selectedDate > NOW_BASE_CREATE_DATE) {
      // 선택된 날짜가 현재 기준 이후인 경우
      setSelectedTime(String(FUTURE_CREATE_HOUR));
    } else {
      const threeHoursLater = getThreeHoursLater();
      if (selectedTime !== String(threeHoursLater)) {
        setSelectedTime(String(threeHoursLater));
      }
    }
  }, [selectedDate, filter]);

  const isTodayDisabled = isAfter4PM();

  return {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    isTodayDisabled,
  };
}
