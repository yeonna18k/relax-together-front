import CommonBlurCard from '@/shared/common/ui/blur-card';

interface CommonBlurCardWrapperProps {
  children: React.ReactNode;
}
export default function CommonBlurCardWrapper({
  children,
}: CommonBlurCardWrapperProps) {
  return (
    <div className="relative">
      <CommonBlurCard />
      {children}
    </div>
  );
}
