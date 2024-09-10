import { Select, SelectTrigger, SelectValue } from '@/shared/ui/select';

interface SelectProps {
  placeholder: string;
  onValueChange?: (value: string) => void;
  children?: React.ReactNode;
}
export default function SelectBox({
  placeholder,
  onValueChange,
  children,
}: SelectProps) {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="max-w-[28.75rem] lg:w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      {children}
    </Select>
  );
}
