import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 날짜 포맷팅 (ex. 1월 7일)
export const formatDate = (stringDate: string): string => {
  const date = new Date(stringDate);
  return new Intl.DateTimeFormat('ko-KR', {
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// 시간 포맷팅 (ex. 17:30)
export const formatTime = (stringDate: string): string => {
  const date = new Date(stringDate);
  return new Intl.DateTimeFormat('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
};

export const getISOTimeWithOffset = (hourOffset: number) => {
  // 현재 날짜와 시간 가져오기
  const currentDate = new Date();

  // 4시간 뒤의 시간을 계산 (4시간 = 4 * 60 * 60 * 1000 밀리초)
  const futureDate = new Date(
    currentDate.getTime() + hourOffset * 60 * 60 * 1000,
  );

  // ISO 8601 형식으로 변환
  return futureDate.toISOString();
};
