'use client';
import useCreateGathering from '@/entities/gatherings/model/hook/useCreateGathering';
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
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
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
  selectedFilter?: SwitchFiler;
}

export default function GatheringCreateModal() {
  const { closeModal } = useModal();
  const [selectedFilter, setSelectedFilter] = useState<SwitchFiler>('달램핏');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const { selectedDate, selectedTime } = useSelectDateTime(selectedFilter);
  const { onSubmit } = useCreateGathering();

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

  useEffect(() => {
    if (selectedFilter === '워케이션') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    form.reset();
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
