import { SwitchFiler } from '@/features/gatherings/model/create-gathring';
import { useHandleDownloadURL } from '@/features/gatherings/model/hook/useHandleDownloadURL';
import { useResetOnFilterChange } from '@/features/gatherings/model/hook/useResetOnFilterChange';
import { useToggleDisableState } from '@/features/gatherings/model/hook/useToggleDisableState';
import LoadingSpinner from '@/shared/common/ui/loading-spinner';

import useFileUpload from '@/shared/hooks/useFileUpload';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

interface FileUploadProps {
  imageUrl: string;
  onChange: (...event: any[]) => void;
  selectedFilter?: SwitchFiler;
  setIsDisabled: (value: boolean) => void;
}
export default function FileUpload({
  imageUrl,
  onChange,
  selectedFilter,
  setIsDisabled,
}: FileUploadProps) {
  const { handleFileChange, downloadURL, isUploading } = useFileUpload();

  useHandleDownloadURL(downloadURL, onChange);
  useResetOnFilterChange(onChange, selectedFilter);
  useToggleDisableState(isUploading, setIsDisabled);

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
        value={imageUrl}
        placeholder="이미지를 첨부해주세요"
        readOnly
        disabled
        className="h-[40px] w-full rounded-md p-2 text-sm font-medium disabled:bg-gray-50 disabled:text-gray-400 disabled:hover:ring-0 disabled:focus:outline-none"
      />
      <Label
        htmlFor="image-uploader"
        className={`${isUploading ? 'pointer-events-none bg-gray-200' : 'bg-white'} min-w-[90px] cursor-pointer rounded-[6px] border border-green-500 px-4 py-2.5 text-center text-sm text-green-500 hover:border-green-800 hover:bg-green-800 hover:text-white`}
      >
        {isUploading ? <LoadingSpinner /> : '파일 찾기'}
      </Label>
    </div>
  );
}
