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
