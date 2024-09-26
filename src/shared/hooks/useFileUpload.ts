import { storage } from '@/app/firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useEffect, useState } from 'react';

export default function useFileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [downloadURL, setDownloadURL] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  useEffect(() => {
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      error => {
        console.error(error);
        setError('파일 업로드 중 에러가 발생했습니다. 다시 시도해 주세요.');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          setDownloadURL(downloadURL);
          setFile(null);
          setUploadProgress(0);
        });
      },
    );
  }, [file]);

  return { handleFileChange, uploadProgress, downloadURL };
}
