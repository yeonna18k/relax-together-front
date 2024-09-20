import Pen from '@/shared/assets/icons/pen.svg';
import { useModal } from '@/shared/hooks/useModal';
import { Button } from '@/shared/ui/button';

export default function EditProfileButton() {
  const { setOpen } = useModal();
  return (
    <div className="flex h-full items-start pt-[14px] md:items-center md:pt-0">
      <Button
        variant="ghost"
        className="h-8 w-8 rounded-full bg-gray-200 px-[10.5px] py-2 md:h-[52px] md:w-[52px] md:px-[15.5px] md:py-[12.5px]"
        onClick={() => setOpen(true)}
      >
        <Pen className="h-[16px] w-[11px] md:h-[27px] md:w-[21px]" />
      </Button>
    </div>
  );
}
