'use client';

import { useMyGatheringsData } from '@/entities/mypage/api/queries';
import { timeComparisonStatus } from '@/entities/mypage/model/lib/utils';
import MypageCard from '@/entities/mypage/ui/card';
import ContentEmptySection from '@/features/mypage/ui/sub-page/ContentEmptySection';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MyPendingReviewSection() {
  const { data, fetchNextPage, status } = useMyGatheringsData();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending' || !data) {
    return <LoadingSkeletonList />;
  }
  return data.pages[0].totalElements > 0 ? (
    <ScrollSection ref={ref}>
      {data?.pages.map((page, index) => (
        <ul key={`my-pending-reviews-${page}-${index}`}>
          {page.content.map(gathering => {
            const status = timeComparisonStatus(gathering.dateTime);
            return status === 'completed' ? (
              <li
                key={gathering.id}
                className="border-b-2 border-dashed border-gray-300 py-6 first:pt-0"
              >
                <MypageCard alt="my-gatherings-image" {...gathering} />
              </li>
            ) : null;
          })}
        </ul>
      ))}
      <div ref={ref} />
    </ScrollSection>
  ) : (
    <ContentEmptySection description="아직 작성 가능한 리뷰가 없어요" />
  );
}
