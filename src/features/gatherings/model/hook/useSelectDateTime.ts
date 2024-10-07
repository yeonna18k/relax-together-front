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

  const getThreeHoursLater = () => {
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + 3);
    return currentTime.getHours();
  };

  const isAfter4PM = () => {
    const currentTime = new Date();
    return currentTime.getHours() >= 16;
  };

  useEffect(() => {
    if (isAfter4PM() && selectedDate === NOW) {
      const tomorrow = new Date();
      tomorrow.setDate(NOW.getDate() + 1);
      setSelectedDate(tomorrow);
      setSelectedTime('09');
    } else if (selectedDate > NOW_BASE_CREATE_DATE) {
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
