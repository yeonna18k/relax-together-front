import { useUploadStore } from '@/shared/store/useUploadStore';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function useFileUpload() {
  const { isUploading, setIsUploading } = useUploadStore();
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [downloadURL, setDownloadURL] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const id = crypto.randomUUID();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  async function uploadFile(file: File) {
    const { data, error } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET as string)
      .upload(id, file);
    if (error) {
      console.error(error);
      setError('파일 업로드 중 에러가 발생했습니다. 다시 시도해 주세요.');
    } else {
      console.log(data);
      getPublicUrl();
    }
  }

  async function getPublicUrl() {
    const imageUrl = supabase.storage
      .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET as string)
      .getPublicUrl(id);
    console.log(imageUrl.data.publicUrl);
    setDownloadURL(imageUrl.data.publicUrl);
    setFile(null);
    setUploadProgress(0);
    setIsUploading(false);
  }

  useEffect(() => {
    if (!file) return;

    setIsUploading(true);
    uploadFile(file);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return { handleFileChange, uploadProgress, downloadURL, isUploading };
}
