import { useSearchParams } from 'next/navigation';

/**
 * useSearchParams 훅을 모킹하는 함수
 * @param searchParamsString 검색 파라미터 문자열 (예: '?filter=my-gatherings')
 */
export function mockUseSearchParams(searchParamsString: string): void {
  const mockSearchParams = new URLSearchParams(searchParamsString);
  (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);
}
