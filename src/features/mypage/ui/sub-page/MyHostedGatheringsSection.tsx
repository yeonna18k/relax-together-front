'use client';

import { useMyHostedGatheringsData } from '@/entities/mypage/api/queries';
import MypageCard from '@/entities/mypage/ui/card';
import ContentEmptySection from '@/features/mypage/ui/sub-page/ContentEmptySection';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MyHostedGatheringsSection() {
  const { data, fetchNextPage, status } = useMyHostedGatheringsData();

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
        <ul key={`my-hosted-gatherings-${page}-${index}`}>
          {page.content.map(gathering => (
            <li
              key={gathering.id}
              className="border-b-2 border-dashed border-gray-300 py-6 first:pt-0"
            >
              <MypageCard alt="my-gatherings-image" {...gathering} />
            </li>
          ))}
        </ul>
      ))}
      <div ref={ref} />
    </ScrollSection>
  ) : (
    <ContentEmptySection description="아직 만든 모임이 없어요" />
  );
}
