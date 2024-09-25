'use client';

import { useMyGatheringsData } from '@/entities/mypage/api/queries';
import MypageCard from '@/entities/mypage/ui/card';
import ContentEmptySection from '@/features/mypage/ui/sub-page/ContentEmptySection';
import LoadingSkeletonList from '@/features/mypage/ui/sub-page/LoadingSkeletonList';
import ScrollSection from '@/features/mypage/ui/sub-page/ScrollSection';
import CommonBlurCardWrapper from '@/shared/common/ui/blur-card/CommonBlurCardWrapper';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MyGatheringsSection() {
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
        <ul key={`${page}-${index}`}>
          {page.content.map(gathering => (
            <li
              key={gathering.id}
              className="border-b-2 border-dashed border-gray-300 py-6 first:pt-0"
            >
              <CommonBlurCardWrapper
                id={gathering.id}
                status={gathering.status}
              >
                <MypageCard alt="my-gatherings-image" {...gathering} />
              </CommonBlurCardWrapper>
            </li>
          ))}
        </ul>
      ))}
      <div ref={ref} />
    </ScrollSection>
  ) : (
    <ContentEmptySection description="신청한 모임이 아직 없어요" />
  );
}
