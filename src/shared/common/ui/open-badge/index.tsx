import Check from '../check';

interface OpenBadgeProps {
  value: number;
}

export default function OpenBadge({ value }: OpenBadgeProps) {
  return (
    <div className="flex items-center gap-1">
      <Check participantCount={value} />
      <span className="text-sm font-medium text-orange-500">개설확정</span>
    </div>
  );
}
