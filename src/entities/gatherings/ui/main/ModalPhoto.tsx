import { useState } from 'react';

export default function PhotoUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null); // 선택된 파일 상태
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // 미리보기 URL 상태

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 파일 선택
    if (file) {
      setSelectedImage(file); // 파일 상태 저장
      const fileUrl = URL.createObjectURL(file); // 미리보기 URL 생성
      setPreviewUrl(fileUrl); // 미리보기 URL 상태 저장
    }
  };

  const handleImageUpload = () => {
    if (!selectedImage) return;

    // 파일 업로드 로직을 여기에 추가 (예: 서버에 업로드)
    console.log('Uploading:', selectedImage);

    // 업로드 완료 후 처리
    alert('이미지 업로드 완료!');
  };

  return (
    <div className="flex flex-col items-center">
      <label className="active:text-bg-green-700 active:border-bg-green-700 h-[44px] w-[100px] items-center rounded-md border border-green-500 bg-white text-green-500 hover:border-green-600 hover:text-green-600 disabled:text-gray-500">
        파일 찾기
        {/* 실제 파일 입력 필드 */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      {/* 이미지 미리보기 */}
      {previewUrl && (
        <img
          src={previewUrl}
          alt="미리보기"
          className="mb-4 h-40 w-40 rounded-md object-cover"
        />
      )}

      {/* 이미지 업로드 버튼 */}
      <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
        이미지 업로드
      </button>
    </div>
  );
}
