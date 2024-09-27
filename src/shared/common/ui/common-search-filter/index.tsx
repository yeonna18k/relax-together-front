'use client';
import useCommonSearchParams from '@/entities/mypage/model/hooks/useCommonSearchParams';
import CommonSelect, {
  CommonSelectItem,
} from '@/shared/common/ui/common-select';
import DatePicker from '@/shared/common/ui/date-picker';
import FilterButtonGroup from '@/shared/common/ui/filter-button-group';
import { commonFilters } from '@/shared/fixture/filter';
import { commonSelectItems } from '@/shared/fixture/select-items';
import useSearchFilter from '@/shared/hooks/useSearchFilter';
import { Path } from '@/shared/lib/constants';

interface CommonSearchFilterProps {
  sortItems: Array<CommonSelectItem>;
}
export default function CommonSearchFilter({
  sortItems,
}: CommonSearchFilterProps) {
  const { currentSubPage } = useCommonSearchParams();
  const { searchFilterValues, setSearchFilterValues } = useSearchFilter();

  return (
    <div className="my-3 flex w-full flex-col-reverse items-start justify-between sm:flex-row sm:items-center xl:w-[996px]">
      <div className="flex w-full justify-between gap-20 py-3 sm:w-min sm:py-0 md:gap-2 md:py-4">
        <div className="flex justify-between gap-1.5 md:gap-2">
          <CommonSelect
            filterIconType="default"
            menuItems={commonSelectItems}
            onValueChange={selectedValue =>
              setSearchFilterValues(prev => ({ ...prev, selectedValue }))
            }
            placeholder="지역 전체"
            selectedValue="ALL"
          />
          <DatePicker
            date={searchFilterValues.date}
            setDate={date => setSearchFilterValues(prev => ({ ...prev, date }))}
          />
        </div>
        <CommonSelect
          variant="sort"
          filterIconType="sort"
          menuItems={sortItems}
          onValueChange={selectedSortValue =>
            setSearchFilterValues(prev => ({ ...prev, selectedSortValue }))
          }
          placeholder={sortItems[0].label}
          selectedValue={sortItems[0].value}
        />
      </div>
      {currentSubPage === 'dalaemfit' && (
        <div className="w-full border-b-2 border-gray-200 pb-3 sm:w-auto sm:border-none sm:pb-0">
          <FilterButtonGroup filters={commonFilters} path={Path.gatherings} />
        </div>
      )}
    </div>
  );
}
