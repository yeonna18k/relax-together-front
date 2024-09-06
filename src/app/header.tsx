import Image from 'next/image';

export default function Header() {
  return (
    <header className="h-[60px] w-full border-b-2 border-black bg-orange-600">
      <nav className="mx-auto flex w-full items-center justify-between bg-transparent py-[12.5px] xl:max-w-[1200px]">
        <Image
          priority
          src="/logo-large.svg"
          alt="같이 달램"
          width={73}
          height={35}
        />
      </nav>
    </header>
  );
}
