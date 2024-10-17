import { CreateGatheringCommonProps } from '@/features/gatherings/model/create-gathring';
import useSelectLocation from '@/features/gatherings/model/hook/useSelectLocation';
import CreateGatheringFormLabel from '@/features/gatherings/ui/create-gathering-form/CreateGatheringFormLabel';

import CommonSelect from '@/shared/common/ui/common-select';
import { CommonSize, FilterIconType } from '@/shared/lib/constants/ui';
import { FormControl, FormField, FormItem } from '@/shared/ui/form';

export default function CreateGatheringLocationFormFiled({
  control,
  selectedFilter,
}: CreateGatheringCommonProps) {
  const { selectedValue, setSelectedValue, modalMenuItems } =
    useSelectLocation(selectedFilter);
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
              size={CommonSize.LARGE}
              filterIconType={FilterIconType.DEFAULT}
              menuItems={modalMenuItems}
              selectedValue={selectedValue}
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
