import { useEffect } from 'react';

export function useHandleDownloadURL(
  downloadURL: string,
  onChange: (url: string) => void,
) {
  useEffect(() => {
    if (downloadURL) {
      onChange(downloadURL);
    }
  }, [downloadURL, onChange]);
}
