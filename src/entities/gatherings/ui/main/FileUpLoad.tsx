import useFileUpload from '@/shared/hooks/useFileUpload';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { useRef, useState } from 'react';

const FileUpload = () => {
  const { handleFileChange, downloadURL } = useFileUpload();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [filePath, setFilePath] = useState<string>('');

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFilePath(file.name);
      handleFileChange(event);
    }
  };

  return (
    <div className="flex w-full gap-2">
      <Input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="image-uploader"
      />
      <Input
        type="text"
        value={downloadURL}
        placeholder="이미지를 첨부해주세요"
        readOnly
        disabled
        className="h-[40px] w-full rounded-md border border-gray-300 p-2 text-sm font-medium text-black"
      />
      <Label
        htmlFor="image-uploader"
        className="min-w-[90px] rounded-[6px] border border-green-500 bg-white px-4 py-2.5 text-sm text-green-500 hover:bg-green-800 hover:text-white"
      >
        파일 찾기
      </Label>
    </div>
  );
};

export default FileUpload;
