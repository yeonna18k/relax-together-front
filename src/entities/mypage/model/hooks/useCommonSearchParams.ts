import { Filters, SubPage } from '@/shared/lib/constants';
import { ValueOf } from '@/shared/types/utility';
import { useSearchParams } from 'next/navigation';

export type SubPageValueType = ValueOf<typeof SubPage>;
export type FiltersValueType = ValueOf<typeof Filters>;

export default function useCommonSearchParams() {
  const searchParams = useSearchParams();
  const currentSubPage = searchParams.get('subPage') as SubPageValueType | null;
  const currentFilter = searchParams.get('filter') as FiltersValueType | null;
  return { searchParams, currentSubPage, currentFilter };
}
