import { SelectContent, SelectContentProps } from '@/shared/ui/select';

export default function CommonSelectContent({
  children,
  ...props
}: SelectContentProps) {
  return <SelectContent {...props}>{children}</SelectContent>;
}
