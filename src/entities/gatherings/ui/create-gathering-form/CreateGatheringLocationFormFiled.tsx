import CreateGatheringFormLabel from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringFormLabel';
import { CreateGatheringCommonProps } from '@/entities/gatherings/ui/main/GatheringCreateModal';
import CommonSelect from '@/shared/common/ui/common-select';
import { commonSelectItems } from '@/shared/fixture/select-items';
import { FormControl, FormField, FormItem } from '@/shared/ui/form';
import { useState } from 'react';

export default function CreateGatheringLocationFormFiled({
  control,
}: CreateGatheringCommonProps) {
  const [_, setSelectedValue] = useState<string>('건대입구');
  const modalMenuItems = commonSelectItems.filter(item => item.value !== 'ALL');
  const defaultValue = modalMenuItems[0].value;
  return (
    <FormField
      control={control}
      name="location"
      render={({ field }) => (
        <FormItem>
          <CreateGatheringFormLabel label="장소" />
          <FormControl>
            <CommonSelect
              variant="modal"
              size="lg"
              filterIconType="default"
              menuItems={modalMenuItems}
              defaultValue={defaultValue}
              onValueChange={value => {
                setSelectedValue(value);
                field.onChange(value);
              }}
              placeholder="장소를 선택해주세요"
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
