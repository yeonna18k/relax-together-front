import { Gathering } from '@/shared/model';
import Link from 'next/link';

export default function MoreInfoCard({ id }: Pick<Gathering, 'id'>) {
  return (
    <Link
      href={`/gatherings/${id}`}
      className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-6 rounded-md p-6 transition-shadow duration-300 ease-in-out hover:shadow-lg xs:flex-row xs:items-start xs:justify-between md:rounded-xl"
    />
  );
}
