import { ChipTimeCommonProps } from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringDatePickerFormFiled';
import { NOW, NOW_BASE_CREATE_HOUR } from '@/shared/lib/constants';
import { setHours, setMilliseconds, setMinutes, setSeconds } from 'date-fns';

export const checkButtonAvailabilityByTime = (
  selectedDate: Date,
  times: Array<ChipTimeCommonProps>,
): Array<ChipTimeCommonProps> => {
  // NOTE: 현재 날짜보다 선택한 날짜가 미래인 경우 모든 시간을 활성화
  if (selectedDate > NOW) {
    return times;
  }
  // NOTE: 현재 시간보다 3시간 이상 미래인 시간만 활성화
  return times.map(time =>
    time.hour < NOW_BASE_CREATE_HOUR ? { ...time, state: 'disabled' } : time,
  );
};

export const getAddHoursDateISOString = (date: Date, hours: string) => {
  // 시간을 숫자로 변환
  const hoursNum = Number(hours);

  // 날짜에 시간을 설정하고, 분, 초, 밀리초를 0으로 설정
  const newDate = setMilliseconds(
    setSeconds(setMinutes(setHours(date, hoursNum), 0), 0),
    0,
  );

  return newDate.toISOString();
};
