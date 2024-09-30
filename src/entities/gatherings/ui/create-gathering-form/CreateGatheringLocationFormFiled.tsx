import useSelectLocation from '@/entities/gatherings/model/hook/useSelectLocation';
import CreateGatheringFormLabel from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringFormLabel';
import { CreateGatheringCommonProps } from '@/entities/gatherings/ui/main/GatheringCreateModal';
import CommonSelect from '@/shared/common/ui/common-select';
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
              size="lg"
              filterIconType="default"
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
