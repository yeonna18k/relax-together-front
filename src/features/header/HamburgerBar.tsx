import { PopoverTrigger } from '@/shared/ui/popover';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
export default function HamburgerBar({ isOpen, setIsOpen }: Props) {
  return (
    <PopoverTrigger asChild>
      <button
        className="flex flex-col items-center justify-center lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="메뉴 열기"
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-black transition-all duration-300 ease-out ${
            isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
    </PopoverTrigger>
  );
}
