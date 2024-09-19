interface DateTimeTextProps {
  text: string;
}
export default function DateTimeText({ text }: DateTimeTextProps) {
  return <p className="text-sm font-medium text-gray-700">{text}</p>;
}
