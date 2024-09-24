import { useMyGatheringsData } from '@/entities/mypage/api/my-gatherings';
import MypageCard from '@/entities/mypage/ui/card';
import CommonBlurCardWrapper from '@/shared/common/ui/blur-card/CommonBlurCardWrapper';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function MyGatheringsSection() {
  const { data, error, fetchNextPage, isFetchingNextPage, status } =
    useMyGatheringsData();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending') {
    return <section>Loading...</section>;
  }
  if (status === 'error') {
    return <section>Error</section>;
  }
  return (
    <section className="mt-6 max-h-[calc(100vh-370px)] overflow-y-scroll lg:max-h-[calc(100vh-428px)]">
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
    </section>
  );
}
