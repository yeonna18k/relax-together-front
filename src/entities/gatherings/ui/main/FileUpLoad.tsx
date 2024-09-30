import useFileUpload from '@/shared/hooks/useFileUpload';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';
import { useEffect } from 'react';

interface FileUploadProps {
  onChange: (...event: any[]) => void;
}
export default function FileUpload({ onChange }: FileUploadProps) {
  const { handleFileChange, downloadURL } = useFileUpload();

  useEffect(() => {
    downloadURL ? onChange(downloadURL) : onChange('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downloadURL]);
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
        className="h-[40px] w-full rounded-md p-2 text-sm font-medium disabled:bg-gray-50 disabled:text-gray-400 disabled:hover:ring-0 disabled:focus:outline-none"
      />
      <Label
        htmlFor="image-uploader"
        className="min-w-[90px] cursor-pointer rounded-[6px] border border-green-500 bg-white px-4 py-2.5 text-center text-sm text-green-500 hover:border-green-800 hover:bg-green-800 hover:text-white"
      >
        파일 찾기
      </Label>
    </div>
  );
}
