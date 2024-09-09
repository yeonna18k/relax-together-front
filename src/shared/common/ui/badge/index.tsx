import { Badge } from '@/shared/ui/badge';

function transformCount(count: number) {
  return count < 1000 ? count : '999+';
}
interface CommonBadgeProps {
  count: number;
}
export default function CommonBadge({ count }: CommonBadgeProps) {
  console.log('🚀 ~ CommonBadge ~ count:', count);
  return <Badge>{transformCount(count)}</Badge>;
}
