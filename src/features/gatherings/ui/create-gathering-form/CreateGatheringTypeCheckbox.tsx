import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';

interface CreateGatheringTypeCheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (...event: any[]) => void;
}
export default function CreateGatheringTypeCheckbox({
  id,
  name,
  checked,
  onChange,
}: CreateGatheringTypeCheckboxProps) {
  return (
    <div className="flex w-full items-center justify-center gap-2 py-3 pl-4 pr-5 xs:justify-start">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={checked => (checked ? onChange(name) : undefined)}
      />
      <Label htmlFor={id} className="cursor-pointer">
        {name}
      </Label>
    </div>
  );
}
