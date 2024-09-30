import CreateGatheringFormLabel from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringFormLabel';
import { CreateGatheringCommonProps } from '@/entities/gatherings/ui/main/GatheringCreateModal';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

export default function CreateGatheringNameFormFiled({
  control,
}: CreateGatheringCommonProps) {
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <CreateGatheringFormLabel label="모임 이름" />
          <FormControl>
            <Input
              className="text-gray-900"
              placeholder="모임 이름을 적어주세요"
              value={field.value ?? ''}
              onChange={field.onChange}
            />
          </FormControl>
          <FormMessage className="text-sm font-medium text-error" />
        </FormItem>
      )}
    />
  );
}
