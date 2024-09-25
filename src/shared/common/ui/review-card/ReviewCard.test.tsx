import { Page } from '@/shared/lib/constants';
import { render, screen } from '@testing-library/react';
import ReviewCard, { ReviewCardProps } from '.';

describe('Review Card Component', () => {
  const mockProps: Omit<ReviewCardProps, 'page'> = {
    score: 3,
    userName: '럽윈즈올',
    userProfileImage: '',
    comment:
      '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.',
    gatheringType: '오피스 스트레칭',
    gatheringLocation: '을지로3가',
    createdDate: '2024.01.25',
  };

  test('화면에 Review Card 컴포넌트의 내용(content)과 별점이 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page={Page.MYPAGE} />);

    const reviewContent = screen.getByText(mockProps.comment);
    expect(reviewContent).toBeInTheDocument();
    expect(screen.getAllByTestId('active-heart')).toHaveLength(3);
  });

  test('마이페이지에서는 리뷰를 남긴 장소, 날짜가 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page={Page.MYPAGE} />);

    expect(screen.getByText(mockProps.gatheringLocation)).toBeInTheDocument();
    expect(screen.getByText(mockProps.createdDate)).toBeInTheDocument();
  });

  test('모든 리뷰페이지에서는 리뷰를 남긴 유저의 이름과 장소, 날짜가 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page={Page.ALL_REVIEWS} />);

    expect(screen.getByText(mockProps.userName)).toBeInTheDocument();
    expect(screen.getByText(mockProps.gatheringLocation)).toBeInTheDocument();
    expect(screen.getByText(mockProps.createdDate)).toBeInTheDocument();
  });

  test('모임 상세페이지에서는 리뷰를 남긴 유저의 이름, 날짜가 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page={Page.GATHERING_DETAIL} />);

    expect(screen.getByText(mockProps.userName)).toBeInTheDocument();
    expect(screen.getByText(mockProps.createdDate)).toBeInTheDocument();
  });
});
