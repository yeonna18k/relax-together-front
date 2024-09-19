import DateTimeText from '@/entities/mypage/ui/card/DateTimeText';

interface GatheringDatetimeProps {
  date: string;
  time: string;
}
export default function GatheringDatetime({
  date,
  time,
}: GatheringDatetimeProps) {
  return (
    <div className="flex items-center">
      <DateTimeText text={date} />
      <span className="mx-1 text-gray-700">&#183;</span>
      <DateTimeText text={time} />
    </div>
  );
}
