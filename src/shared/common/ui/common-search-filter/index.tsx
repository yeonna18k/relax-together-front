'use client';
import { SortBy } from '@/entities/gatherings/model/params';
import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import CommonSelect, {
  CommonSelectItem,
} from '@/shared/common/ui/common-select';
import DatePicker from '@/shared/common/ui/date-picker';
import FilterButtonGroup from '@/shared/common/ui/filter-button-group';
import { commonFilters } from '@/shared/fixture/filter';
import { commonSelectItems } from '@/shared/fixture/select-items';
import { SelectedValue, useSearchFilter } from '@/shared/hooks/useSearchFilter';

import { Path } from '@/shared/lib/constants';

interface CommonSearchFilterProps {
  sortItems: Array<CommonSelectItem>;
}
export default function CommonSearchFilter({
  sortItems,
}: CommonSearchFilterProps) {
  const { currentSubPage } = useCommonSearchParams();
  const {
    searchFilterValues,
    setDate,
    setSelectedValue,
    setSelectedSortValue,
  } = useSearchFilter();

  return (
    <div className="flex w-full flex-col-reverse items-start justify-between sm:flex-row sm:items-center md:py-5 xl:w-[996px] xl:pb-6 xl:pt-[30px]">
      <div className="flex w-full justify-between py-3 sm:w-min md:gap-2 md:py-0">
        <div className="flex justify-between gap-1.5 md:gap-2">
          <CommonSelect
            filterIconType="default"
            menuItems={commonSelectItems}
            onValueChange={selectedValue =>
              setSelectedValue(selectedValue as SelectedValue)
            }
            placeholder="지역 전체"
            selectedValue={searchFilterValues.selectedValue}
          />
          <DatePicker date={searchFilterValues.date} setDate={setDate} />
        </div>
        <CommonSelect
          variant="sort"
          filterIconType="sort"
          menuItems={sortItems}
          onValueChange={selectedSortValue =>
            setSelectedSortValue(selectedSortValue as SortBy)
          }
          placeholder={sortItems[0].label}
          selectedValue={searchFilterValues.selectedSortValue}
        />
      </div>
      {currentSubPage === 'dalaemfit' && (
        <div className="w-full border-b-2 border-gray-200 py-3 sm:w-auto sm:border-none md:py-0">
          <FilterButtonGroup filters={commonFilters} path={Path.gatherings} />
        </div>
      )}
    </div>
  );
}
