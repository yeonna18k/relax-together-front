import { Input, InputPassword } from '@/shared/ui/input';

interface CommonInputProps {
  placeholder?: string;
  passwordPlaceholder?: string;
}

export default function CommonInput({
  placeholder,
  passwordPlaceholder,
}: CommonInputProps) {
  return (
    <div className="m-4 space-y-4">
      <Input placeholder={placeholder || '입력해주세요'} />
      <InputPassword
        placeholder={passwordPlaceholder || '비밀번호를 입력해주세요'}
      />
    </div>
  );
}
