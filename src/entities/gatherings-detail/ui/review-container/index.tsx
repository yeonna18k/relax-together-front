import PaginationComponent from '@/features/pagination-reviews/ui';
import { dummyReviews } from '@/shared/fixture/reviews';
import { REVIEWS_PER_PAGE } from '@/shared/lib/constants';
import { useState } from 'react';

interface ReviewContainerProps {
  id: string;
}

export default function ReviewContainer({ id }: ReviewContainerProps) {
  // const [reviewList, setReviewList] = useState<Reviews>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 리뷰 리스트 더미 데이터 (임시)
  const reviewList = dummyReviews;
  // 리뷰 리스트 데이터 fetch
  const getReviewData = (page: number) => {};

  const totalReviews = reviewList.totalElements;
  const totalPages = Math.ceil(totalReviews / REVIEWS_PER_PAGE);

  return (
    <div className="mt-4 rounded-xl bg-white p-6 sm:mt-6">
      <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
        이용자들은 이 프로그램을 이렇게 느꼈어요!
      </h3>
      <div className="mt-4">
        <PaginationComponent
          reviewList={reviewList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          getReviewData={getReviewData}
        />
      </div>
    </div>
  );
}
