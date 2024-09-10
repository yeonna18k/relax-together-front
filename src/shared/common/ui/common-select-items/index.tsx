import { SelectItem } from '@/shared/ui/select';

export type CommonSelectItem = {
  value: string;
  label: string;
};

interface CommonSelectItemsProps {
  menuItems: Array<CommonSelectItem>;
}
export default function CommonSelectItems({
  menuItems,
}: CommonSelectItemsProps) {
  return (
    <>
      {menuItems.map(menuItem => (
        <SelectItem key={menuItem.value} value={menuItem.value}>
          {menuItem.label}
        </SelectItem>
      ))}
    </>
  );
}
