export interface UserInfoTextProps {
  category: string;
  value: string;
}
export default function UserInfoText({ category, value }: UserInfoTextProps) {
  return (
    <div className="flex gap-1.5">
      <p className="w-[62px] min-w-[62px] text-sm font-medium text-gray-900">
        {category}
      </p>
      <p className="max-w-[120px] break-words text-sm text-gray-700 xs:max-w-full">
        {value}
      </p>
    </div>
  );
}
