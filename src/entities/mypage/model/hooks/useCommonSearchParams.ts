import { useSearchParams } from 'next/navigation';

export default function useCommonSearchParams() {
  const searchParams = useSearchParams();
  const currentSubPage = searchParams.get('subPage');
  const currentFilter = searchParams.get('filter');
  return { searchParams, currentSubPage, currentFilter };
}
