import { useState } from 'react';

type SearchFilterValues = {
  date: Date | undefined;
  selectedValue: string;
  selectedSortValue: string;
};
export default function useSearchFilter() {
  const [searchFilterValues, setSearchFilterValues] =
    useState<SearchFilterValues>({
      date: undefined,
      selectedValue: 'ALL',
      selectedSortValue: 'DUE_DATE',
    });
  return { searchFilterValues, setSearchFilterValues };
}
