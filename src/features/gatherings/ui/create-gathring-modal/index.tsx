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
import { Form } from '@/shared/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function GatheringCreateModal() {
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
      type: selectedFilter === '달램핏' ? '오피스 스트레칭' : '워케이션',
      dateTime: getAddHoursDateISOString(selectedDate, selectedTime),
      registrationEnd: getAddHoursDateISOString(selectedDate, selectedTime),
      imageUrl: '',
      capacity: 5,
    },
  });

  // 필터가 변경될 때 폼 일부만 리셋하고 워케이션일 때 이름 필수로 설정
  // 필터가 변경될 때 폼 필드 리셋 및 type 값 설정
  useEffect(() => {
    if (selectedFilter === '워케이션') {
      form.setValue('type', '워케이션'); // 워케이션으로 설정
      form.setValue('name', ''); // 이름 필수로 설정
      setIsDisabled(true); // 이름 입력 전까지는 버튼 비활성화
    } else {
      form.setValue('type', '오피스 스트레칭'); // 달램핏으로 기본값 설정
      form.setValue('name', null); // 이름 필드 비활성화
      setIsDisabled(false); // 버튼 활성화
    }
  }, [selectedFilter, form]);

  // 이름 필드가 입력되었는지 체크하여 버튼 활성화/비활성화
  useEffect(() => {
    const subscription = form.watch(value => {
      if (selectedFilter === '워케이션') {
        setIsDisabled(!(value.name && value.name.length > 0));
      }
    });
    return () => subscription.unsubscribe();
  }, [form, selectedFilter]);
  // 이름이 입력되지 않았을 때 버튼 비활성화
  useEffect(() => {
    const subscription = form.watch(value => {
      if (selectedFilter === '워케이션') {
        setIsDisabled(!(value.name && value.name.length > 0));
      }
    });
    return () => subscription.unsubscribe();
  }, [form, selectedFilter]);

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
            {/* 달램핏 선택 시 유형 선택 필드 */}
            {selectedFilter === '달램핏' ? (
              <CreateGatheringTypeFormFiled control={form.control} />
            ) : (
              // 워케이션 선택 시 모임 이름 필드
              <CreateGatheringNameFormFiled control={form.control} />
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
