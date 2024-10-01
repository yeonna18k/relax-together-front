import { CreateGatheringCommonProps } from '@/features/gatherings/model/create-gathring';
import CreateGatheringFormLabel from '@/features/gatherings/ui/create-gathering-form/CreateGatheringFormLabel';
import CreateGatheringTypeCheckbox from '@/features/gatherings/ui/create-gathering-form/CreateGatheringTypeCheckbox';
import { FormControl, FormField, FormItem } from '@/shared/ui/form';

export default function CreateGatheringTypeFormFiled({
  control,
}: CreateGatheringCommonProps) {
  return (
    <FormField
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem>
          <CreateGatheringFormLabel label="선택 서비스" />
          <FormControl>
            <div className="flex w-full justify-between text-gray-900">
              <CreateGatheringTypeCheckbox
                id="office-stretching"
                name="오피스 스트레칭"
                checked={field.value === '오피스 스트레칭'}
                onChange={field.onChange}
              />
              <CreateGatheringTypeCheckbox
                id="mindfulness"
                name="마인드풀니스"
                checked={field.value === '마인드풀니스'}
                onChange={field.onChange}
              />
            </div>
          </FormControl>
        </FormItem>
      )}
    />
  );
}
