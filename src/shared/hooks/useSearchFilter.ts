'use client';
import { SortBy } from '@/shared/lib/constants';
import { useSearchFilterStore } from '@/shared/store/useSearchFilterStore';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function useSearchFilter(path: string) {
  const pathName = usePathname();

  const {
    resetSearchFilter,
    searchFilterValues,
    setDate,
    setSelectedValue,
    setSelectedSortValue,
  } = useSearchFilterStore();

  useEffect(() => {
    resetSearchFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  useEffect(() => {
    path === 'reviews' && setSelectedSortValue(SortBy.CREATED_DATE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  return {
    searchFilterValues,
    setDate,
    setSelectedValue,
    setSelectedSortValue,
  };
}
