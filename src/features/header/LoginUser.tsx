import Image from 'next/image';

interface LoginUserProps {
  image?: string;
  name: string;
}
export default function LoginUser({ image, name }: LoginUserProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        priority
        src={image ?? '/assets/default-user.svg'}
        alt="user"
        width={32}
        height={32}
      />
      <p className="font-bold text-green-700">{name}님</p>
    </div>
  );
}
