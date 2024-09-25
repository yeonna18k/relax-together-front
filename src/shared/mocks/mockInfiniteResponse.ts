import { Response } from '@/shared/model/response';

export default function mockInfiniteResponse<T>(
  contents: Array<T>,
  page: number,
  size: number,
): Response<T> {
  // 페이지네이션 처리
  const startIndex = page * size;
  const endIndex = startIndex + size;

  // 해당 페이지의 데이터를 추출
  const pageData = contents.slice(startIndex, endIndex);

  // 다음 페이지가 있는지 확인
  const hasNext = endIndex < contents.length;

  // Mock response 생성
  const mockResponse: Response<T> = {
    content: pageData,
    hasNext,
    totalElements: contents.length,
  };
  return mockResponse;
}
