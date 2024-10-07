import {
  CreateGathering,
  SwitchFiler,
} from '@/features/gatherings/model/create-gathring';
import useSelectDateTime from '@/features/gatherings/model/hook/useSelectDateTime';
import {
  checkButtonAvailabilityByTime,
  getAddHoursDateISOString,
} from '@/features/gatherings/model/lib/utils';
import CreateGatheringDateTimeSelector from '@/features/gatherings/ui/create-gathering-form/CreateGatheringDateTimeSelector';
import CreateGatheringFormLabel from '@/features/gatherings/ui/create-gathering-form/CreateGatheringFormLabel';
import { ChipTimeProps } from '@/shared/common/ui/chip-time';
import { Calendar } from '@/shared/ui/calendar';
import { FormControl, FormField, FormItem } from '@/shared/ui/form';
import { useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';

export type ChipTimeCommonProps = Omit<ChipTimeProps, 'isSelected' | 'onClick'>;

const AMTimes: Array<ChipTimeCommonProps> = [
  { hour: 9, minute: 0, state: 'enabled' },
  { hour: 10, minute: 0, state: 'enabled' },
  { hour: 11, minute: 0, state: 'enabled' },
];

const PMTimes: Array<ChipTimeCommonProps> = [
  { hour: 12, minute: 0, state: 'enabled' },
  { hour: 13, minute: 0, state: 'enabled' },
  { hour: 14, minute: 0, state: 'enabled' },
  { hour: 15, minute: 0, state: 'enabled' },
  { hour: 16, minute: 0, state: 'enabled' },
  { hour: 17, minute: 0, state: 'enabled' },
  { hour: 18, minute: 0, state: 'enabled' },
];

interface CreateGatheringDateTimeFormFiledProps {
  form: UseFormReturn<CreateGathering>;
  selectedFilter: SwitchFiler;
}
export default function CreateGatheringDateTimeFormFiled({
  form,
  selectedFilter,
}: CreateGatheringDateTimeFormFiledProps) {
  const { selectedDate, setSelectedDate, selectedTime, setSelectedTime } =
    useSelectDateTime(selectedFilter);
  useEffect(() => () => form.reset(), [form]);

  useEffect(() => {
    if (selectedDate !== null && selectedTime !== null) {
      form.reset();
    }
  }, [form, selectedDate, selectedTime]);

  useEffect(() => {
    form.setValue(
      'dateTime',
      getAddHoursDateISOString(selectedDate, selectedTime),
    );
    form.setValue(
      'registrationEnd',
      getAddHoursDateISOString(selectedDate, selectedTime),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, selectedTime]);

  useEffect(() => {
    const newDateTime = getAddHoursDateISOString(selectedDate, selectedTime);

    // 만약 현재 form의 값이 기존과 다를 때만 상태 업데이트를 수행
    if (form.getValues('dateTime') !== newDateTime) {
      form.setValue('dateTime', newDateTime);
    }

    const newRegistrationEnd = getAddHoursDateISOString(
      selectedDate,
      selectedTime,
    );

    if (form.getValues('registrationEnd') !== newRegistrationEnd) {
      form.setValue('registrationEnd', newRegistrationEnd);
    }
  }, [selectedDate, selectedTime, form]);
  return (
    <FormField
      control={form.control}
      name="dateTime"
      render={({ field }) => (
        <FormItem>
          <CreateGatheringFormLabel label="날짜" />
          <FormControl>
            <div className="space-y-4">
              <div className="flex w-full justify-center rounded-md border border-gray-200 px-2.5 pb-4 pt-2.5">
                <Calendar
                  mode="single"
                  disabled={{ before: new Date() }}
                  selected={selectedDate}
                  onSelect={date => setSelectedDate(date || selectedDate)}
                />
              </div>
              <CreateGatheringDateTimeSelector
                title="오전"
                timeItems={checkButtonAvailabilityByTime(selectedDate, AMTimes)}
                selectedValue={selectedTime}
                onClick={e => setSelectedTime(e.currentTarget.value)}
              />
              <CreateGatheringDateTimeSelector
                title="오후"
                timeItems={checkButtonAvailabilityByTime(selectedDate, PMTimes)}
                selectedValue={selectedTime}
                onClick={e => setSelectedTime(e.currentTarget.value)}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
