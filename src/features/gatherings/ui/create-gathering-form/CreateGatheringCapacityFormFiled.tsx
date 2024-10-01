import { CreateGatheringCommonProps } from '@/features/gatherings/model/create-gathring';
import CreateGatheringFormLabel from '@/features/gatherings/ui/create-gathering-form/CreateGatheringFormLabel';

import { FormControl, FormField, FormItem } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

export default function CreateGatheringCapacityFormFiled({
  control,
}: CreateGatheringCommonProps) {
  return (
    <FormField
      control={control}
      name="capacity"
      render={({ field }) => (
        <FormItem>
          <CreateGatheringFormLabel label="모집 정원" />
          <FormControl>
            <Input
              className="text-gray-900"
              placeholder="최소 5인 이상 입력해주세요"
              value={field.value}
              type="number"
              min={5}
              onChange={field.onChange}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
