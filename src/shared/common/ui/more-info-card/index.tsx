'use client';
import { Gathering } from '@/shared/model';
import Link from 'next/link';

interface MoreInfoCardProps extends Pick<Gathering, 'id'> {
  status: boolean;
}
export default function MoreInfoCard({ id, status }: MoreInfoCardProps) {
  const statusColor = status
    ? 'bg-black/80 z-30'
    : 'transition-shadow duration-300 ease-in-out hover:shadow-lg z-10';
  return (
    <Link
      href={`/gatherings/${id}`}
      aria-label={`모임 ${id} 상세 페이지로 이동`}
      className={`absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-6 rounded-md p-6 xs:flex-row xs:items-start xs:justify-between md:rounded-xl ${statusColor}`}
    >
      {status ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2">
          <p className="text-sm text-white">마감된 모임이에요.</p>
          <p className="text-sm text-white">다음 기회에 만나요 🙏</p>
        </div>
      ) : (
        <></>
      )}
    </Link>
  );
}
