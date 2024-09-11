import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 날짜 포맷
export function formatDate(dateTime: string) {
  const eventDate = new Date(dateTime);

  const month = eventDate.getMonth() + 1;
  const date = eventDate.getDate();
  const formattedDate = `${month}월 ${date}일`;

  return formattedDate;
}

// 시간 포맷
export function formatTime(dateTime: string) {
  const eventDate = new Date(dateTime);

  const hour = eventDate.getHours();
  const minute = eventDate.getMinutes();
  const formattedTime = `${hour}:${minute}`;

  return formattedTime;
}
