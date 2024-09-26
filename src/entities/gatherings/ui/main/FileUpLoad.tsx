import useFileUpload from '@/shared/hooks/useFileUpload';
import { useRef, useState } from 'react';

const FileUpload = () => {
  const { handleFileChange, handleUpload, uploadProgress, downloadURL, error } =
    useFileUpload();
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
    <div className="flex gap-2">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelect}
      />
      <input
        type="text"
        value={filePath}
        placeholder="이미지를 첨부해주세요"
        readOnly
        className="h-[40px] w-full rounded-md border border-gray-300 p-2 text-sm font-medium"
      />

      <button
        onClick={handleButtonClick}
        className="box-border flex h-[40px] w-[80px] flex-none flex-grow-0 flex-row items-center justify-center rounded-[6px] border border-green-500 bg-white text-sm text-green-500 hover:bg-green-800 hover:text-green-800"
      >
        파일 찾기
      </button>

      <button onClick={handleUpload} className="mt-2">
        업로드
      </button>

      {uploadProgress > 0 && <p>업로드 진행률: {uploadProgress}%</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {downloadURL && (
        <div>
          <p>파일 다운로드 URL:</p>
          <a href={downloadURL} target="_blank" rel="noopener noreferrer">
            {downloadURL}
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
