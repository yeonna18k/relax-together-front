'use client';
import useSelectDateTime from '@/entities/gatherings/model/hook/useSelectDateTime';
import { getAddHoursDateISOString } from '@/entities/gatherings/model/lib/utils';
import CreateGatheringCapacityFormFiled from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringCapacityFormFiled';
import CreateGatheringDateTimeFormFiled from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringDatePickerFormFiled';
import CreateGatheringImageUploadFormFiled from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringImageUploadFormFiled';
import CreateGatheringLocationFormFiled from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringLocationFormFiled';
import CreateGatheringNameFormFiled from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringNameFormFiled';
import CreateGatheringSwitchButtonGroup, {
  SwitchFiler,
} from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringSwitchButtonGroup';
import CreateGatheringTypeFormFiled from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringTypeFormFiled';
import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { FUTURE_CREATE_DATE, FUTURE_CREATE_HOUR } from '@/shared/lib/constants';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { Control, useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().nullable().optional(),
  location: z.union([
    z.literal('건대입구'),
    z.literal('을지로3가'),
    z.literal('신림'),
    z.literal('홍대입구'),
  ]),
  imageUrl: z.string().optional(),
  type: z.union([
    z.literal('오피스 스트레칭'),
    z.literal('마인드풀니스'),
    z.literal('워케이션'),
  ]),
  dateTime: z.string(),
  registrationEnd: z.string(),
  capacity: z.number().gte(5),
});

export type CreateGathering = z.infer<typeof formSchema>;

export interface CreateGatheringCommonProps {
  control: Control<CreateGathering>;
}

export default function GatheringCreateModal() {
  const { closeModal } = useModal();
  const [selectedFilter, setSelectedFilter] = useState<SwitchFiler>('달램핏');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { selectedDate, selectedTime, setSelectedDate, setSelectedTime } =
    useSelectDateTime();
  // TODO: 모임 만들기에 필요한 상태값 정의
  const form = useForm<CreateGathering>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      name: null,
      location: '건대입구',
      type: '오피스 스트레칭',
      dateTime: getAddHoursDateISOString(selectedDate, selectedTime),
      registrationEnd: getAddHoursDateISOString(selectedDate, selectedTime),
      imageUrl: '',
      capacity: 5,
    },
  });

  const resetForm = useCallback(() => {
    const baseValues: Partial<CreateGathering> = {
      location: '건대입구',
      imageUrl: '',
      capacity: 5,
    };

    const currentDateTime = getAddHoursDateISOString(
      FUTURE_CREATE_DATE,
      String(FUTURE_CREATE_HOUR),
    );

    if (selectedFilter === '워케이션') {
      form.reset({
        ...baseValues,
        type: '워케이션',
        name: '',
        dateTime: currentDateTime,
        registrationEnd: currentDateTime,
      });
    } else {
      form.reset({
        ...baseValues,
        type: '오피스 스트레칭',
        name: null,
        dateTime: currentDateTime,
        registrationEnd: currentDateTime,
      });
    }
    setSelectedDate(FUTURE_CREATE_DATE);
    setSelectedTime(String(FUTURE_CREATE_HOUR));
  }, [selectedFilter, selectedDate, selectedTime, form]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    if (selectedFilter === '워케이션') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [selectedFilter]);

  useEffect(() => {
    form.watch(value => {
      if (value.name !== null && value.name !== undefined) {
        value.name.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
      }
    });
  }, [form]);

  async function onSubmit(values: CreateGathering) {
    if (selectedFilter === '워케이션' && !values.name) {
      form.setError('name', { message: '모임 이름을 입력해주세요' });
      return;
    }
    console.log('🚀 ~ onSubmit ~ values:', values);
    // closeModal('createGathering');
  }

  return (
    <Modal
      title="모임 만들기"
      variant="single"
      size="lg"
      actionBtnName="확인"
      type="submit"
      disabled={isDisabled}
      handleAction={form.handleSubmit(onSubmit)}
    >
      <div className="h-auto max-h-[80vh] w-full space-y-6 overflow-y-auto p-1">
        <CreateGatheringSwitchButtonGroup
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <Form {...form}>
          <form className="space-y-6">
            {selectedFilter === '워케이션' ? (
              <CreateGatheringNameFormFiled control={form.control} />
            ) : (
              <CreateGatheringTypeFormFiled control={form.control} />
            )}
            <CreateGatheringLocationFormFiled control={form.control} />
            <CreateGatheringImageUploadFormFiled control={form.control} />
            <CreateGatheringDateTimeFormFiled form={form} />
            <CreateGatheringCapacityFormFiled control={form.control} />
          </form>
        </Form>
      </div>
    </Modal>
  );
}
