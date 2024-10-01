'use client';
import {
  CreateGathering,
  createGatheringSchema,
  SwitchFiler,
} from '@/features/gatherings/model/create-gathring';
import useCreateGathering from '@/features/gatherings/model/hook/useCreateGathering';
import useSelectDateTime from '@/features/gatherings/model/hook/useSelectDateTime';
import { getAddHoursDateISOString } from '@/features/gatherings/model/lib/utils';
import CreateGatheringCapacityFormFiled from '@/features/gatherings/ui/create-gathering-form/CreateGatheringCapacityFormFiled';
import CreateGatheringDateTimeFormFiled from '@/features/gatherings/ui/create-gathering-form/CreateGatheringDatePickerFormFiled';
import CreateGatheringImageUploadFormFiled from '@/features/gatherings/ui/create-gathering-form/CreateGatheringImageUploadFormFiled';
import CreateGatheringLocationFormFiled from '@/features/gatherings/ui/create-gathering-form/CreateGatheringLocationFormFiled';
import CreateGatheringNameFormFiled from '@/features/gatherings/ui/create-gathering-form/CreateGatheringNameFormFiled';
import CreateGatheringSwitchButtonGroup from '@/features/gatherings/ui/create-gathering-form/CreateGatheringSwitchButtonGroup';
import CreateGatheringTypeFormFiled from '@/features/gatherings/ui/create-gathering-form/CreateGatheringTypeFormFiled';
import Modal from '@/shared/common/ui/modal';
import { useModal } from '@/shared/hooks/useModal';
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function GatheringCreateModal() {
  const { closeModal } = useModal();
  const [selectedFilter, setSelectedFilter] = useState<SwitchFiler>('달램핏');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { selectedDate, selectedTime } = useSelectDateTime(selectedFilter);
  const { onSubmit } = useCreateGathering();

  const form = useForm<CreateGathering>({
    resolver: zodResolver(createGatheringSchema),
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

  useEffect(() => {
    selectedFilter === '워케이션' ? setIsDisabled(true) : setIsDisabled(false);
    form.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  useEffect(() => {
    form.watch(value => {
      if (value.name !== null && value.name !== undefined) {
        value.name.length > 0 ? setIsDisabled(false) : setIsDisabled(true);
      }
    });
  }, [form]);

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
            <CreateGatheringLocationFormFiled
              control={form.control}
              selectedFilter={selectedFilter}
            />
            <CreateGatheringImageUploadFormFiled control={form.control} />
            <CreateGatheringDateTimeFormFiled
              form={form}
              selectedFilter={selectedFilter}
            />
            <CreateGatheringCapacityFormFiled control={form.control} />
          </form>
        </Form>
      </div>
    </Modal>
  );
}
