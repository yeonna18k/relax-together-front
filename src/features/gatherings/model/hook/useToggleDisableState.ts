import { useEffect } from 'react';

export function useToggleDisableState(
  isUploading: boolean,
  setIsDisabled: (value: boolean) => void,
) {
  useEffect(() => {
    setIsDisabled(isUploading);
  }, [isUploading, setIsDisabled]);
}
