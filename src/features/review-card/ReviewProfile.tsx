import Image from 'next/image';

export default function ReviewProfile({ user }: { user: string }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium">
      <Image
        src="/assets/check.svg"
        alt="user-img"
        width={24}
        height={24}
        className="rounded-full bg-black"
      />
      <span>{user}</span>
      <span>|</span>
    </div>
  );
}
