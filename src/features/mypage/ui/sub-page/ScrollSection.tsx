import CommonSection from '@/features/mypage/ui/sub-page/CommonSection';
import { forwardRef, PropsWithChildren } from 'react';

interface ScrollSectionProps extends PropsWithChildren {
  className?: string;
}
const ScrollSection = forwardRef<HTMLDivElement, ScrollSectionProps>(
  ({ children, className }, ref) => {
    return (
      <CommonSection className={className}>
        {children}
        <div ref={ref} />
      </CommonSection>
    );
  },
);

ScrollSection.displayName = 'ScrollSection';
export default ScrollSection;
