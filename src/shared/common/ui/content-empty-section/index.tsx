import { cn } from '@/shared/lib/utils';

interface ContentEmptySectionProps {
  description: string;
  className?: string;
}
export default function ContentEmptySection({
  description,
  className,
}: ContentEmptySectionProps) {
  return (
    <section
      className={cn(
        'mt-6 flex min-h-[calc(100vh-370px)] w-full items-center justify-center text-sm font-medium text-gray-600 lg:min-h-[calc(100vh-428px)]',
        className,
      )}
    >
      {description}
    </section>
  );
}
