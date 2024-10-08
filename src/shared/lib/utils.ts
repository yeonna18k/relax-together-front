import { clsx, type ClassValue } from 'clsx';
import { toZonedTime } from 'date-fns-tz';
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

export function getKoreaTime() {
  const koreaTimeZone = 'Asia/Seoul';
  const now = new Date();
  const koreaTime = toZonedTime(now, koreaTimeZone);
  return koreaTime;
}

// 같은 날 마감인지 확인하는 함수
function isSameDayDeadline(now: Date, deadline: Date): boolean {
  return now.toDateString() === deadline.toDateString();
}

// 24시간 이내 마감인지 확인하는 함수
function isLessThan24Hours(diffInHours: number): boolean {
  return diffInHours <= 24 && diffInHours > 0;
}

// 며칠 후 마감인지 포맷하는 함수
function formatDaysUntilDeadline(diffInDays: number): string {
  const rtf = new Intl.RelativeTimeFormat('ko', { numeric: 'always' });
  return rtf.format(Math.floor(diffInDays), 'day') + ' 마감';
}

function getRemainingHoursText(remainingHours: number): string {
  return `${remainingHours}시간 후 마감`;
}

// 전체 마감 처리 로직
export function getTimeUntilDeadline(registrationEnd: Date): string {
  const now = getKoreaTime();
  const diffInMilliseconds = registrationEnd.getTime() - now.getTime();
  const diffInMinutes = diffInMilliseconds / 1000 / 60;
  const diffInHours = diffInMinutes / 60;
  const diffInDays = diffInHours / 24;
  const remainingHours = Math.floor(diffInHours);

  // 마감일이 지나면
  if (diffInMilliseconds < 0) {
    return '마감되었습니다';
  }

  // 오늘 마감
  if (isSameDayDeadline(now, registrationEnd)) {
    return `오늘 ${remainingHours > 0 ? getRemainingHoursText(remainingHours) : '곧 마감'}`;
  }

  // 24시간 이내지만 날짜가 다른 경우
  if (isLessThan24Hours(diffInHours)) {
    return getRemainingHoursText(remainingHours);
  }

  // 며칠 후 마감
  return formatDaysUntilDeadline(diffInDays);
}
