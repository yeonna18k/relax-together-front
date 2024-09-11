import { render, screen } from '@testing-library/react';
import ReviewCard, { ReviewCardProps } from '.';
import { SCORE_EXAMPLE } from './ReviewCard.stories';

describe('Review Card Component', () => {
  const mockProps: Omit<ReviewCardProps, 'page'> = {
    score: SCORE_EXAMPLE,
    user_name: '럽윈즈올',
    user_image: '',
    content:
      '따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요. 따듯하게 느껴지는 공간이에요 :) 평소에 달램 이용해보고 싶었는데 이렇게 같이 달램 생기니까 너무 좋아요! 프로그램이 더 많이 늘어났으면 좋겠어요.',
    place: '달램핏 오피스 스트레칭 이용',
    address: '을지로 3가',
    date: '2024.01.25',
  };

  test('화면에 Review Card 컴포넌트의 내용(content)이 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page="mypage" />);

    const reviewContent = screen.getByText(mockProps.content);
    expect(reviewContent).toBeInTheDocument();
  });

  test('Mypage에서는 리뷰를 남긴 장소, 날짜가 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page="reviews" />);

    expect(screen.getByText(mockProps.place)).toBeInTheDocument();
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
  });

  test('Reviews에서는 리뷰를 남긴 유저의 이름과 장소, 날짜가 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page="reviews" />);

    expect(screen.getByText(mockProps.user_name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.place)).toBeInTheDocument();
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
  });

  test('Search에서는 리뷰를 남긴 유저의 이름, 날짜가 렌더링 된다', () => {
    render(<ReviewCard {...mockProps} page="search" />);

    expect(screen.getByText(mockProps.user_name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
  });
});
