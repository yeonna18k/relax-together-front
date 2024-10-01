import { cn } from '@/shared/lib/utils';
import { PropsWithChildren } from 'react';

interface CommonSectionProps extends PropsWithChildren {
  className?: string;
}
export default function CommonSection({
  children,
  className,
}: CommonSectionProps) {
  return (
    <section
      className={cn(
        'mt-6 max-h-[calc(100vh-370px)] overflow-y-scroll lg:max-h-[calc(100vh-428px)]',
        className,
      )}
    >
      {children}
    </section>
  );
}
