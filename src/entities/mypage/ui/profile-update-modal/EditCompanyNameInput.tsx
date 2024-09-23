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
    <div className="flex flex-col">
      <ContentTitle title="회사" />
      <Input
        placeholder="회사명을 입력해주세요."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
