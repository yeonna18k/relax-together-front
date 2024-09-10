import { SelectContent } from '@/shared/ui/select';
import { SelectItem } from '@radix-ui/react-select';

export type SelectBoxMenuItem = {
  value: string;
  label: string;
};

interface CommonSelectContentProps {
  menuItems: Array<SelectBoxMenuItem>;
}
export default function CommonSelectContent({
  menuItems,
}: CommonSelectContentProps) {
  return (
    <SelectContent>
      {menuItems.map(menuItem => (
        <SelectItem key={menuItem.value} value={menuItem.value}>
          {menuItem.label}
        </SelectItem>
      ))}
    </SelectContent>
  );
}
