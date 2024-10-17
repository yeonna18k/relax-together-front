import { FiltersValueType, SubPageValueType } from '@/shared/types/utility';
import { useSearchParams } from 'next/navigation';

export default function useCommonSearchParams() {
  const searchParams = useSearchParams();
  const currentSubPage = searchParams.get('subPage') as SubPageValueType | null;
  const currentFilter = searchParams.get('filter') as FiltersValueType | null;
  return { searchParams, currentSubPage, currentFilter };
}
