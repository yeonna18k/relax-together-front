import { SortBy } from '@/shared/lib/constants';
import { GatheringLocation } from '@/shared/model';
import { SortByValueType } from '@/shared/types/utility';

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type SelectedValue = GatheringLocation | 'ALL';
type SearchFilterValues = {
  date: Date | undefined;
  selectedValue: SelectedValue;
  selectedSortValue: SortByValueType;
};

type SearchFilterState = {
  searchFilterValues: SearchFilterValues;
};

type SearchFilterAction = {
  resetSearchFilter: () => void;
  setDate: (date: Date | undefined) => void;
  setSelectedValue: (value: SelectedValue) => void;
  setSelectedSortValue: (value: SortByValueType) => void;
};

export const useSearchFilter = create(
  immer<SearchFilterState & SearchFilterAction>(set => ({
    searchFilterValues: {
      date: undefined,
      selectedValue: 'ALL',
      selectedSortValue: SortBy.REGISTRATION_END,
    },
    resetSearchFilter: () =>
      set(state => {
        state.searchFilterValues.date = undefined;
        state.searchFilterValues.selectedValue = 'ALL';
        state.searchFilterValues.selectedSortValue = SortBy.REGISTRATION_END;
      }),
    setDate: date =>
      set(state => {
        state.searchFilterValues.date = date;
      }),
    setSelectedValue: value =>
      set(state => {
        state.searchFilterValues.selectedValue = value;
      }),
    setSelectedSortValue: value =>
      set(state => {
        state.searchFilterValues.selectedSortValue = value;
      }),
  })),
);
