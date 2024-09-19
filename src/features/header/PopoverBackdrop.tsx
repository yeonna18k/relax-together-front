interface PopoverBackdropProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function PopoverBackdrop({
  isOpen,
  onClose,
}: PopoverBackdropProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 top-[56px] z-40 bg-black/50 ${isOpen ? 'duration-300 animate-in fade-in-0' : 'animate-out fade-out-0'}`}
      onClick={onClose}
    />
  );
}
