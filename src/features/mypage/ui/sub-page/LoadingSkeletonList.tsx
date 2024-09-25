import CommonSection from '@/features/mypage/ui/sub-page/CommonSection';
import { Skeleton } from '@/shared/ui/skeleton';

export default function LoadingSkeletonList() {
  return (
    <CommonSection>
      <ul>
        {Array.from({ length: 10 }).map((_, index) => (
          <li
            key={`skeleton-${index}`}
            className="border-b-2 border-dashed border-gray-300 py-6 first:pt-0"
          >
            <Skeleton className="h-[400px] w-full rounded-md md:h-[156px] md:rounded-xl" />
          </li>
        ))}
      </ul>
    </CommonSection>
  );
}
