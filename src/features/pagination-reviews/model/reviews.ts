import { Review } from '@/shared/model';

export type Reviews = {
  reviews: Review[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
};
