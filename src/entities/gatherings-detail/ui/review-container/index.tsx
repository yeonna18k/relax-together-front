'use client';

import PaginationReviews from '@/features/pagination-reviews/ui';
import { REVIEWS_PER_PAGE } from '@/shared/lib/constants';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { gatheringsDetailApiService } from '../../api/service/GatheringsDetailApiService';

interface ReviewContainerProps {
  id: string;
}

export default function ReviewContainer({ id }: ReviewContainerProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data } = useQuery({
    queryKey: ['review', id, currentPage],
    queryFn: () =>
      gatheringsDetailApiService.getReviewList({ id, currentPage }),
  });

  const totalReviews = data?.totalElements;
  const totalPages = totalReviews && Math.ceil(totalReviews / REVIEWS_PER_PAGE);

  return (
    <div className="mt-4 rounded-xl bg-white p-6 sm:mt-6">
      <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h3>
      <div className="mt-4">
        {data && totalPages ? (
          <PaginationReviews
            reviewList={data}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        ) : (
          // TODO: 높이 조절
          <div className="flex items-center justify-center text-sm font-medium text-gray-600">
            아직 리뷰가 없어요
          </div>
        )}
      </div>
    </div>
  );
}
