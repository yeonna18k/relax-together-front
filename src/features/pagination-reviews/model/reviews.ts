export type Review = {
  gatheringType: string;
  gatheringLocation: string;
  userProfileImage: string;
  userName: string;
  score: number;
  comment: string;
  createdDate: string;
};

export type Reviews = {
  reviews: Review[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
};
