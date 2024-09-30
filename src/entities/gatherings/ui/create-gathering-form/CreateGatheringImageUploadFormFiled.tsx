import CreateGatheringFormLabel from '@/entities/gatherings/ui/create-gathering-form/CreateGatheringFormLabel';
import FileUpload from '@/entities/gatherings/ui/main/FileUpLoad';
import { CreateGatheringCommonProps } from '@/entities/gatherings/ui/main/GatheringCreateModal';
import { FormControl, FormField, FormItem } from '@/shared/ui/form';

export default function CreateGatheringImageUploadFormFiled({
  control,
}: CreateGatheringCommonProps) {
  return (
    <FormField
      control={control}
      name="imageUrl"
      render={({ field }) => (
        <FormItem>
          <CreateGatheringFormLabel label="이미지" />
          <FormControl>
            <FileUpload onChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
