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

// 년원일 포맷팅 (ex. 2024.09.24)
export const formatFullDate = (stringDate: string): string => {
  const date = new Date(stringDate);
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
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

// 클립보드에 URL 복사
export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('링크가 복사되었습니다.');
  } catch (err) {
    console.error('클립보드 복사 실패:', err);
  }
};

export function getTimeUntilDeadline(registrationEnd: Date) {
  const now = new Date();
  const diffInMilliseconds = registrationEnd.getTime() - now.getTime();
  const diffInMinutes = diffInMilliseconds / 1000 / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;

  const rtf = new Intl.RelativeTimeFormat('ko', { numeric: 'always' });

  // 오늘 마감 (같은 날일 경우)
  if (now.toDateString() === registrationEnd.toDateString()) {
    const remainingHours = Math.floor(diffInHours);
    return remainingHours > 0
      ? `오늘 ${remainingHours}시간 후 마감`
      : `오늘 곧 마감`;
  }

  // 몇 시간 안 남았지만 날짜가 다른 경우 (24시간 이내일 때)
  if (diffInHours <= 24 && diffInHours > 0) {
    const remainingHours = Math.floor(diffInHours);
    return remainingHours > 1 ? `${remainingHours}시간 후 마감` : `곧 마감`;
  }

  // 마감일이 지나면
  if (diffInMilliseconds < 0) {
    return '마감되었습니다';
  }

  // 며칠 후 마감
  return rtf.format(Math.floor(diffInDays), 'day') + ' 마감';
}
