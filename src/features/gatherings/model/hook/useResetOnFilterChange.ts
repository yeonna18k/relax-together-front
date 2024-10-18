import { SwitchFiler } from '@/features/gatherings/model/create-gathring';
import { useEffect } from 'react';

export function useResetOnFilterChange(
  onChange: (url: string) => void,
  selectedFilter?: SwitchFiler,
) {
  useEffect(() => {
    onChange('');
  }, [selectedFilter, onChange]);
}
