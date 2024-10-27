import { Reviews } from '@/features/pagination-reviews/model/reviews';
import { REVIEWS_PER_PAGE } from '../lib/constants';

export const dummyReviews: Reviews = {
  reviews: Array.from({ length: 30 }, (_, index) => ({
    gatheringType: '달램핏',
    gatheringLocation: '건대입구',
    userProfileImage: '/assets/logo-icon.svg',
    userName: '럽윈즈올',
    score: 4,
    comment: `${index} 따뜻하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.`,
    createdDate: '2024.10.15',
  })),
  currentPage: 0,
  totalPages: Math.ceil(30 / REVIEWS_PER_PAGE),
  totalElements: 30,
};
