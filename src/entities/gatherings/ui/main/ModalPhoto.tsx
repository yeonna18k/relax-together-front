import { useState } from 'react';

export default function PhotoUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
    }
  };

  const handleImageUpload = () => {
    if (!selectedImage) return;

    console.log('Uploading:', selectedImage);

    alert('이미지 업로드 완료!');
  };

  return (
    <div className="flex flex-col items-center">
      <label className="active:text-bg-green-700 active:border-bg-green-700 h-[44px] w-[100px] items-center rounded-md border border-green-500 bg-white text-green-500 hover:border-green-600 hover:text-green-600 disabled:text-gray-500">
        파일 찾기
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      {previewUrl && (
        <img
          src={previewUrl}
          alt="미리보기"
          className="mb-4 h-40 w-40 rounded-md object-cover"
        />
      )}

      <button className="rounded-md bg-blue-500 px-4 py-2 text-white">
        이미지 업로드
      </button>
    </div>
  );
}
