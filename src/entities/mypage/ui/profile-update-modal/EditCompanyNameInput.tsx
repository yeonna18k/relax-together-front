import ContentTitle from '@/entities/mypage/ui/common/ContentTitle';
import { Input } from '@/shared/ui/input';

interface EditCompanyNameInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function EditCompanyNameInput({
  value,
  onChange,
}: EditCompanyNameInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <ContentTitle title="회사" />
      <Input
        className="w-full bg-gray-100 text-gray-800"
        placeholder="회사명을 입력해주세요."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
