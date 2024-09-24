import useFileUpload from '@/shared/hooks/useFileUpload';
import { useRef } from 'react';

const FileUpload = () => {
  const { handleFileChange, handleUpload, uploadProgress, downloadURL, error } =
    useFileUpload();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // 숨겨진 파일 입력창 열기
    }
  };

  return (
    <div>
      {/* 숨겨진 파일 선택 input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }} // 파일 선택 창 숨기기
        onChange={handleFileChange}
      />

      {/* 커스텀 파일 선택 버튼 */}
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          cursor: 'pointer',
          border: 'none',
        }}
      >
        파일 선택
      </button>

      <button onClick={handleUpload}>업로드</button>

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
