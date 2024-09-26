import CommonSection from '@/features/mypage/ui/sub-page/CommonSection';
import { forwardRef, PropsWithChildren } from 'react';

const ScrollSection = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <CommonSection>
        {children}
        <div ref={ref} />
      </CommonSection>
    );
  },
);

ScrollSection.displayName = 'ScrollSection';
export default ScrollSection;
