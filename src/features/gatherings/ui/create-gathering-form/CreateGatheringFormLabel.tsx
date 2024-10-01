import { FormLabel } from '@/shared/ui/form';

interface CreateGatheringFormLabelProps {
  label: string;
}
export default function CreateGatheringFormLabel({
  label,
}: CreateGatheringFormLabelProps) {
  return (
    <FormLabel className="mb-3 text-base font-semibold text-gray-900">
      {label}
    </FormLabel>
  );
}
