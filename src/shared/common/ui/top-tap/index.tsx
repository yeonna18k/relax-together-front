'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TopTapProps {
  path: string;
  name: string;
}
export default function TopTap({ path, name }: TopTapProps) {
  const currentPathName = usePathname();
  return (
    <ul>
      <Link
        href={path}
        className={`${currentPathName === path ? 'text-gray-900' : ''}`}
      >
        {name}
      </Link>
    </ul>
  );
}
